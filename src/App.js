import React from 'react';
import './App.css';
import { HomeComponent } from './components/home/home';
import { Profile } from './components/profile/profile';
import { NavBar } from './components/nav-bar/nav-bar';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false
    }
  }
  callbackFunction = (childData) => {
    this.setState({isLoggedIn: childData});
  }
  render() {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
    <div className="container-fluid">
      { !this.state.isLoggedIn ? <HomeComponent parentCallback = {this.callbackFunction}/> : null }
      { this.state.isLoggedIn ? <Profile /> : null }
    </div>
    </React.Fragment>
  );
  }
}

export default App;
