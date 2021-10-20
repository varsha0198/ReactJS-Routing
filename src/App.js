import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './component/Home';
import Info from './component/Info';
import About from './component/About';
import Contact from './component/Contact';
import Demo from './component/Demo';
import User from './component/User';
import Felix from './component/Felix';
import File from './component/File';
import Document from './component/Document';
import Web from './component/Web';
import PageNotFound from './component/PageNotFound';

function App() {
  return (
    <>
      <Menu />    

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/info' component={Info} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/demo' component={Demo} />
        <Route path='/user' component={User} />
        <Route path='/felix' component={Felix} />
        <Route path='/file' component={File} />
        <Route path='/document' component={Document} />
        <Route path='/web' component={Web} />
        <Route component={PageNotFound} />

      </Switch>


    </>
      
  );
}

export default App;
