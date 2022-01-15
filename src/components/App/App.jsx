import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  useEffect (() => {
    fetchGalleryList();
  }, []);

  const [galleryList, setGalleryList] = useState ([]);

  const fetchGalleryList = () => {
    console.log('in FETCH');
    axios.get('/gallery')
    .then(response => {
      console.log('GET /gallery', response.data);
      setGalleryList(response.data)
    })
    .catch(error => {
      console.log('GET Failed', error);
    })
  };

  const addLikes = (data, id) => {
    console.log('in likes');
    axios.put(`/gallery/like/${id}`, {
      likes: data
    })
    .then(response => {
      console.log('PUT /gallery', response);
      fetchGalleryList();
    })
    .catch(error => {
      console.log('PUT Failed', error);
    })
  };

  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList={galleryList} addLikes={addLikes} />
      </div>
    );
}

export default App;
