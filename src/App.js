import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import AppName from './components/AppName/AppName';
import InfoCard from './components/InfoCard/InfoCard';
import Prompt from './components/Prompt/Prompt';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navigation />
        <AppName />
        <Prompt />
        <InfoCard />
        {/*<ImageLinkForm />
           <FaceRecognition />*/}
      </div>
    );
  }

}

export default App;
