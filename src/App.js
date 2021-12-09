import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp'
import TheHorusHeresy from './components/pages/TheHorusHeresy'
import RiseofMankind from './components/pages/RiseofMankind'
import TheGreatCrusade from './components/pages/TheGreatCrusade'
import Joke from './components/Joke'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/SignUp' exact component={SignUp} />
      <Route path='/TheHorusHeresy' exact component={TheHorusHeresy} />
      <Route path='/RiseofMankind' exact component={RiseofMankind} />
      <Route path='/TheGreatCrusade' exact component={TheGreatCrusade} />
    </Switch>
    <Joke/>
    </Router>
    </>
  );
}

export default App;