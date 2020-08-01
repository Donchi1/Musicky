import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Zoom  from  "react-reveal/Zoom"
import Nav from './musickyFiles/Nav';
import About from './musickyFiles/About';
import Teams from './musickyFiles/Teams';
import Contacts from './musickyFiles/Contacts';
import Home from './musickyFiles/Home';
import "./musickyFiles/MusickyCss/musicky.css"
import "./musickyFiles/MusickyCss/home.css"
import "./musickyFiles/MusickyCss/team.css"
import "./musickyFiles/MusickyCss/contact.css"
import Tracks from './musickyFiles/Tracks';

import "./musickyFiles/MusickyCss/tracks.css"
import Testimony from './musickyFiles/Testimony';



function App() {
  return (
    <Router>
      <Nav />
     <Switch>
       
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/teams" exact component={Teams}/>
      <Route path="/contacts" exact component={Contacts}/>
      <Route path="/tracks" exact component={Tracks}/>
    
      <Route path="/testimonies" exact component={Testimony}/>
     </Switch>
   
    </Router>
  );
}

export default App;
