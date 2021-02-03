import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const _API_URL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;

// Component will rerender and photos slice of state will contain real data.
function App() {

    // Parse through and execute the code from top to bottom. Initialize state to hold the image URL.
    const [photo, setPhoto] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const fetchPhotos = () => {
      axios.get(`${_API_URL}`)
        .then(response => {
          console.log(response);

          // Update the photo slice of state.
          setPhoto(response.data);
        })
        .catch(err => console.log(err))
    }

    useEffect(fetchPhotos, [])  // callback function, dependency array
    //useEffect(() => {}, []); // Not synced with any data, so this effect only fires once.

    const Photo = (props) => {
      return (
        <div className="photo">
          {props.photo.name}
          <button onClick={() => setSelectedPhoto(props.photo.id)}>see details</button>
        </div>
      )
    }

    // Render the component.
    return (
      <div className="App">
          <h1>Nasa Photo of The Day</h1>
          <img src={ photo } alt="a random photo" />
      </div>
    );
};

export default App;
