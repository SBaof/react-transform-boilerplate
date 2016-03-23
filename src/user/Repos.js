import React, { Component } from 'react';
import map from 'lodash/map';

class Repos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const repoList = map(this.props.repos, (repo) => {
      return (
        <li key={repo.id}>
          <div>
            <a href={repo.clone_url} className='name'>{repo.name}</a>
            <p className='lang'>{repo.language}</p>
          </div>
          <p className='desc'>{repo.description}</p>
        </li>
      );
    });

    return (
      <ul className='user-repos'>
        { repoList }
      </ul>
    );
  }
}

export default Repos;

