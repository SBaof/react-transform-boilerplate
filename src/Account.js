import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';

class Account extends Component {
  _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
    console.log(account);
  }
  render() {
    return (
      <div className="account">
        <Card className='content'>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <TextField hintText='Your GitHub Account'
                       ref='account'/>
            <FlatButton label='Search GitHub'
                        type='submit'
                        primary={true} />
          </form>
        </Card>
      </div>
    );
  }
}

export default Account;

