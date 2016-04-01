import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './user/UserInfo';
import github from './utils/github';
import Repos from './user/Repos';

import esp from './utils/esp';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
//    console.log(account);
    console.log(github);
    console.log(esp.getMsg());
    console.log(1);

    github.getGithubInfo(account)
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos
        });
    });
  }

  render() {
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
          <RaisedButton
            style={{display: 'block', margin: '0 auto', width: '180px'}}
            primary={true}
            label='save' />
        </div>
      );
    }

    return (
      <div className="account">
        <Card className='content'>
          <DatePicker
            style={{fontSize: '14px'}}
            ref='birthday'
            hintText='Birthday'
            autoOk={false} />
          <form onSubmit={this._handleSubmit.bind(this)}>
            <TextField hintText='Your GitHub Account'
                       ref='account'/>
            <FlatButton label='Search GitHub'
                        type='submit'
                        primary={true} />
          </form>
          { GitHubInfo }
        </Card>
      </div>
    );
  }
}

export default Account;

