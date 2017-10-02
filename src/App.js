import React, { Component } from 'react';

import ProjectList from './components/project-list/ProjectList';

import logo from './logo.svg';
import './App.css';

const projects = [{
  title: 'Mysterium',
  description: 'Devinez qui a tué le fantôme'
}, {
  title: 'Zombicide',
  description: 'Accomplissez les objectifs en tuant un max de zombies !'
}, {
  title: 'Dice Forge',
  description: 'Forgez vos dés pour devenir un demi-dieu'
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Board game editor</h1>
        </header>
        <ProjectList items={projects} />
      </div>
    );
  }
}

export default App;
