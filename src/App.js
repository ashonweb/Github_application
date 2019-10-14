import React from 'react';
import logo from './logo.svg';
import LoginComponent from './LoginComponent';
import './App.css';
import {  Route, Switch } from 'react-router-dom';
import SearchUser from "./SearchUser";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' render = {()=>(
          <LoginComponent />
          )}
        />
        <Route path ='/githubsearch' render = {()=>(
          <SearchUser />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
