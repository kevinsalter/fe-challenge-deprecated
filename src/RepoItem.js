import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = props => {
  return (
    <li className="App-repo-list-item">
      <ul className="App-repo-list-item--details">
        <li>
          <strong>Name:</strong> {props.repo.name}
        </li>
        <li>
          <strong>Fork count:</strong> {props.repo.forks}
        </li>
        <li>
          <strong>Language:</strong> {props.repo.language}
        </li>
        <li>
          <strong>Created date:</strong> {props.repo.created_at}
        </li>
      </ul>
    </li>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object,
};

export default RepoItem;
