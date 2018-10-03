import React, { Component } from 'react';
import {Main} from "./features/components/main";
import {Header} from './features/components/header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Main/>
      </div>
    );
  }
}

