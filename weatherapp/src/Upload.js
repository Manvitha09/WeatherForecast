/*import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post('http://localhost:5000//upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch(error => {
        // Handle any error that occurred during the upload
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;*/

import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    /*axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })*/
    //axios.post('http://localhost:5000/upload', formData, { withCredentials: true })
    axios.get('http://localhost:5000/api/data')
  
  
      .then(response => {
        // Handle the response from the server
        console.log(response.data);
        setPrediction(response.data.prediction);  // Assuming the server returns the prediction
      })
      .catch(error => {
        // Handle any error that occurred during the upload
        console.error(error);
      });
  };

  const handlePredict = () => {
    // Perform the prediction request separately
    axios.post('http://localhost:5000/predict')
      .then(response => {
        // Handle the response from the server
        console.log(response.data);
        setPrediction(response.data.prediction);  // Assuming the server returns the prediction
      })
      .catch(error => {
        // Handle any error that occurred during the prediction request
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handlePredict}>Predict</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default ImageUpload;

