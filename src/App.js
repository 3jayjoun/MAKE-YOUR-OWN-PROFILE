import React from 'react';
import profile from './profile.jpg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lien: "https://www.facebook.com/",
    };
  }
  send(){
    return (this.state.lien=="")? "" :this.state.lien; 
  }
  render() {
    return (
    <div className="App col-md-2 col-xs-2">
      <img src={profile} className="profile"  />
      <h2>Omar jribi</h2>
      <button hidden={(this.state.lien=="")? true : false}>
      <a href={this.state.lien}>facebook</a>
      </button>
    </div>  
    );
  }
  
}

export default App;
