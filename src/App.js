import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Projects from './containers/Projects';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header>
            <h1>Board game editor</h1>
          </header>
          <Projects />
        </div>
      </Provider>
    );
  }
}

export default App;
