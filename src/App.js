import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import AppName from './components/AppName/AppName';
import Prompt from './components/Prompt/Prompt';
import ImageCard from './components/ImageCard/ImageCard';
import InfoCard from './components/InfoCard/InfoCard';


import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <AppName />
        <Prompt />
        <ImageCard />
        {/*<InfoCard />
           <ImageLinkForm />
           <FaceRecognition />*/}
      </div>
    );
  }

}

export default App;
