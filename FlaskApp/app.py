'''from flask import Flask
app = Flask(__name__)
@app.route('/')
def index():
    return 'Hello, Flask!' '''


'''from flask import Flask, request

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' in request.files:
        image = request.files['image']
        # Process the image and pass it to the deep learning model
        # Return the result as a response

    return 'No image file provided', 400

if __name__ == '__main__':
    app.run(debug=True)'''

# import tensorflow as tf
# from tensorflow.keras.models import load_model

# # Load the Jupyter Notebook file
# notebook_file = 'weather-forecast.ipynb'

# # Load the notebook as a TensorFlow graph
# graph = tf.Graph()
# with tf.io.gfile.GFile(notebook_file, 'rb') as f:
#     content = f.read()
#     graph_def = tf.compat.v1.GraphDef()
#     graph_def.ParseFromString(content)
#     tf.import_graph_def(graph_def, name='')

# # Create a new Keras model and load the weights
# with tf.compat.v1.Session(graph=graph) as sess:
#     model = load_model('FLASKAPP/models/model2.h5')

#     # Save the model in H5 format
#     model.save('FLASKAPP/models/model2.h5')

#try this code after installing sklearn
# import json
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.models import model_from_json

# # Load the IPython Notebook file
# notebook_file = 'weather-forecast.ipynb'  

# # Load the notebook as JSON
# with open(notebook_file, 'r') as f:
#     notebook_json = json.load(f)

# # Find the cell that contains the model definition
# model_cell = None
# for cell in notebook_json['cells']:
#     if cell['cell_type'] == 'code' and 'model' in cell['source']:
#         model_cell = cell
#         break

# # Extract the model code from the cell
# model_code = model_cell['source']

# # Remove unnecessary characters from the code
# model_code = model_code.replace('model = ', '')

# # Create a new Keras model from the extracted code
# model = Sequential()
# exec(model_code, globals(), locals())

# # Save the model in h5 format
# model.save('final.h5')

'''from flask import Flask,request
from keras.models import load_model
from keras.applications import ResNet50
import h5py
import tensorflow.keras as keras
from tensorflow.keras.models import model_from_json
import nbformat as nbf
app= Flask(__name__)

# MODEL_PATH='models/model.h5'
model=ResNet50(weights="imagenet")
model.save('models/model.h5')'''

#ACTUAL CODE

'''import json
import h5py
def convert_ipynb_to_h5(ipynb_file_path, h5_file_path):
    # Load the IPYNB file as JSON
    with open(ipynb_file_path, 'r') as f:
        notebook = json.load(f)

    # Create a new H5 file
    with h5py.File(h5_file_path, 'w') as hf:
        # Convert the IPYNB data to H5 format
        for cell in notebook['cells']:
            if cell['cell_type'] == 'code':
                code = cell['source']
                code_bytes = code.encode('utf-8')
                dataset_name = f'code_cell_{cell["execution_count"]}'
                hf.create_dataset(dataset_name, data=code_bytes)

ipynb_file = 'weather-forecast.ipynb'
h5_file = 'model.h5'
convert_ipynb_to_h5(ipynb_file, h5_file)'''

from flask import Flask, request, jsonify, render_template, url_for
from flask_cors import CORS
#from keras.models import load_model
import numpy as np
#from PIL import Image
import tensorflow as tf
from flask_cors import cross_origin
import io
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from keras.applications.imagenet_utils import preprocess_input

model = tf.keras.models.load_model('model2.h5')
model.load_weights('weights.h5')
app = Flask(__name__)

#CORS(app, origins=['http://localhost:3000'])
#CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
#CORS(app, origins='http://localhost:3000', methods=['GET', 'POST', 'PUT', 'DELETE'], allow_headers=['Content-Type', 'Authorization'])

# Rest of your Flask app code

'''@app.route('/api/data', methods=['GET'])
def get_data():
    response = jsonify({'message': 'Data response'})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    return response'''





@app.route('/')

def home():
    return render_template('index.html', )
    


'''@app.route('/api/data', methods=['GET'])
def get_data():
    response = jsonify({'message': 'Data response'})
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response'''

# Existing code for image upload route
@app.route('/upload', methods=['POST'])
@cross_origin()

def upload():
    if 'image' not in request.files:
        return 'No file uploaded', 400

    file = request.files['image']
     #Process the file as needed (e.g., save it to disk, perform image processing, etc.)

    return 'File uploaded successfully' 






# def preprocess_image(image):
#     # Add preprocessing steps here (e.g., resizing, normalization, etc.)
#     # Return the preprocessed image
#     return image

@app.route('/predict', methods=['GET','POST'])
def predict():
    img_file=request.files['image']
    img = image.load_img(io.BytesIO(img_file.read()),target_size=((224, 224)))
    # Preprocessing the image
    x = np.array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x, mode='caffe')

    preds = model.predict(x)
    preds=np.array(preds)
    # Define the specific weather categories
    weather_categories = ['Sunny', 'Cloudy', 'Rainy', 'Sunrise', 'Snowy']

    # Get the predicted class index
    class_index = np.argmax(preds, axis=1)[0]

    # Check if the predicted class index is within range
    if class_index < len(weather_categories):
        predicted_category = weather_categories[class_index]
    else:
        valid_preds = preds[:, :len(weather_categories)]  # Get predictions within valid range
        max_prob_index = np.argmax(valid_preds, axis=1)[0]  # Find index of maximum probability
        predicted_category = weather_categories[max_prob_index]

    #return predicted_category
    
    return render_template('index.html', prediction=predicted_category)


if __name__ == '__main__':
    app.run(debug=True)


'''from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import io

# Load the CNN model
model = load_model('model2.h5')
model.load_weights('weights.h5')

# Define the class labels
class_labels = ['Sunrise', 'Cloudy', 'Rainy', 'Shine']

# Initialize Flask application
app = Flask(__name__)

# Define route for home page
@app.route('/')
def home():
    return render_template('index.html')

# Define route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    # Get the uploaded image file
    img_file = request.files['image']
    
    # Load and preprocess the image
    img = image.load_img(io.BytesIO(img_file.read()), target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0
    
    # Perform prediction
    result = model.predict(img)
    
    # Process the prediction result
    # Map the predicted index to the class label
    predicted_index = np.argmax(result)
    predicted_class = class_labels[predicted_index]
    
    # Render the prediction result on the same page
    return render_template('index.html', prediction=predicted_class)

# Run the Flask application
if __name__ == '_main_':
    app.run(debug=True)'''

