import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func,
  };

  state = { name: '' };

  render() {
    return (
      <div className="App-search-bar">
        <input
          value={this.state.name}
          readOnly
          placeholder="search by repository name"
        />
      </div>
    );
  }
}

export default SearchBar;
