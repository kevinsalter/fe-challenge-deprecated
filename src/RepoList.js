import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem.js';

const RepoList = props => {

  const repos = props.repos.map(repo => {
    return <RepoItem key={repo.id} repo={repo} />;
  });

  return (
    <ul className="App-repo-list">
      {repos}
    </ul>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array,
};

export default RepoList;
