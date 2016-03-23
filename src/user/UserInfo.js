import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const userInfo = this.props.userInfo;
    let githubAddr = 'https://github.com/' + `${userInfo.login}`;
    let followers = githubAddr + '/followers';
    let following = githubAddr + '/following';
    let public_repos = githubAddr + '?tab=repositories';
    console.log(followers);
    console.log(userInfo);
    console.log(userInfo.login);
    return (
      <div className='user-info'>
        <img src={userInfo.avatar_url} />
        <ul>
          <li>
            <b>{userInfo.followers}</b>
            <a href={followers}>
              <span>followers</span>
            </a>
          </li>
          <li>
            <b>{userInfo.following}</b>
            <a href={following}>
              <span>following</span>
            </a>
          </li>
          <li>
            <b>{userInfo.public_repos}</b>
            <a href={public_repos}>
              <span>repos</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserInfo;

