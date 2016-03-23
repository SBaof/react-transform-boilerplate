import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import AvatarURL from './assets/photo.jpg';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className='content'>
          <div className='story'>
            <h3>个人信息</h3>
            <div className="desc">
              web开发者，PHPer
            </div>
            <a href="https://github.com/SBaof">
              <RaisedButton label='下载简历' primary={true} labelStyle={{fontSize: '16px'}} />
            </a>
          </div>
          <div className='paper'>
            <img src={AvatarURL} />
          </div>
          <div className="info">
            <h3>联系方式</h3>
            <ul>
              <li>
                <span>姓名：</span> San Baofeng
              </li>
              <li>
                <span>邮箱：</span> 184040280@qq.com
              </li>
              <li>
                <span>微信：</span> sbf962464
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

