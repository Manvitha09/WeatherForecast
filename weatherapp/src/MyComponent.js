/*import React from 'react';

class MyComponent extends React.Component {
  handleClick = () => {
    fetch('/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: 'exampleData' }) // Replace 'exampleData' with your actual data
    })
    .then(response => response.json())
    .then(result => {
      // Handle the response from the backend
      console.log(result);
    })
    .catch(error => {
      // Handle any error that occurs during the request
      console.error(error);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Predict</button>
      </div>
    );
  }
}

export default MyComponent;*/

import React, { useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/endpoint', {
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
        
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  return <div>Your component content here</div>;
};

export default YourComponent;
