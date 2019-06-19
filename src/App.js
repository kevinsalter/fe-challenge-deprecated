import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import RepoList from './RepoList.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/orgs/Blizzard/repos').then(response => {
      return response.json().then(json => {
        console.log(json);
      });
    });
  }

  search = name => {
    console.log("I'm searching! ", name);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Blizzard Github Repos</h2>
        </div>
        <SearchBar onSearch={this.search} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
