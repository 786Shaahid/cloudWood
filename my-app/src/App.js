// App.js
import React from 'react';
import ImageComponent from './Components/ImageComponent.js' ;
import NavigationComponent from './Components/NavigationComponent';
import './App.css'
const App = () => {
  return (
    <div className='app'>
    <div>
      <ImageComponent />
      <NavigationComponent />

    </div>
    </div>
  );
};

export default App;
