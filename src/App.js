import React from 'react';
import './App.css';
import { HomeComponent } from './components/home/home';
import { Login } from './components/home/login/login';
import { SignUp } from './components/home/sign-up/sign-up';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    
    <div className="container-fluid">
        {/* <Router>
        <Route path="/" exact component={HomeComponent} />
    </Router> */}
      <HomeComponent />
    </div>
  );
}

export default App;
