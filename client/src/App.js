import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Education from './components/pages/Education';
import Projects from './components/pages/Projects'
import Experience from './components/pages/Experience'
import Contacts from './components/pages/Contacts'
import Skills from './components/pages/Skills'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/education' component={Education} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
          <Route path='/experience' component={Experience} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
