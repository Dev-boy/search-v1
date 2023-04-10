import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import AppName from './components/AppName/AppName';
import Prompt from './components/Prompt/Prompt';
import ImageCard from './components/ImageCard/ImageCard';
import InfoCard from './components/InfoCard/InfoCard';
import Footer from './components/Footer/Footer';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log("click");
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <AppName />
        <Prompt onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit} />
        {/*<ImageCard />
           <InfoCard />
           <ImageLinkForm />
           <FaceRecognition />*/}
        <Footer />
      </div>
    );
  }

}

export default App;
