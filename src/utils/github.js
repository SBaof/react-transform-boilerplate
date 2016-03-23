import axios from 'axios';

function getRepos(userName) {
  return axios.get(`https://api.github.com/users/${userName}/repos?per_page=10`);
};

function getUserInfo(userName) {
  return axios.get(`https://api.github.com/users/${userName}`);
};


let github = {
  getGithubInfo(userName) {
    return axios.all([getRepos(userName), getUserInfo(userName)])
      .then((arr)  => {
        return {
          repos: arr[0].data,
          user: arr[1].data
        }
      });
  }
};

export default github;
