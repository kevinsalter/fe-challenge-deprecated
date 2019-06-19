import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import RepoList from './RepoList.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      originalList: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/orgs/Blizzard/repos').then(response => {
      return response.json().then(json => {
        this.setState({repos: json, originalList: json});
      });
    });
  }

  getFilteredList(name) {
    const fillteredList = this.state.originalList.filter(repo => {
      return repo.name.toLowerCase().includes(name.toLowerCase());
    });

    return fillteredList;
  }

  search = (name) => {
    const fillteredList = this.getFilteredList(name)
    this.setState({repos: fillteredList});
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
