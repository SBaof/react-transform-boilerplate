import axios from 'axios';
import md5 from 'md5';

function getSignBuf(method, appid, appkey, timestap, param) {
  param['timestap'] = timestap;
  param['appid'] = appid;

  var sorted = [];
  for(var key in param) {
    if(param.hasOwnProperty(key)) {
      sorted[sorted.length] = key;
    }
  }
  console.log(sorted);
  sorted.sort();
  sorted.reverse();
  console.log(sorted);

  var buf = method;
  for(var i=0; i!=sorted.length; ++i) {
    buf += sorted[i];
    buf += '=';
    buf += param[sorted[i]];
    if(i !== sorted.length-1) {
      buf +='&';
    }
  }

  buf += appkey;
  buf = buf.toLowerCase();
  console.log(buf);
  return buf;
}

function get_url(appid, appkey, chipid) {

//  var timestap = (new Date()).getTime() / 1000;
//  var timestap = Date.parse(new Date()) / 1000;
//  var timestap = Date.now();
  var timestap = Math.round(new Date().getTime()/1000);
  console.log(timestap);

  var sign = md5(getSignBuf('GET', appid, appkey, timestap, {'chipid': chipid}));

  var url = 'https://espush.cn/openapi?' + 'appid=' + appid + '&sign=' + sign + '&timestap=' + timestap;
  console.log(url);
  return url;
}

function get_notice_ws_url(appid, appkey, chipid) {
  console.log(1);
  var timestap = (new Date()).getTime();

  var args = {
    'appid' : appid,
    'timestap' : timestap,
    'chipid' : chipid
  };

  var sign = md5(getSignBuf('GET', appid, appkey, timestap, {'chipid': chipid}));
  args['sign'] = sign;
  console.log(args);

  var url = 'wss://espush.cn/noticed/peer?';// + $.param(args);
  return url;
}

//let esp = get_notice_ws_url('15597', 'f1d5c41cf7dc11e5a51300226d60ec73', '79963');
let url = get_url('15597', 'f1d5c41cf7dc11e5a51300226d60ec73', '79963');

let esp = {
  getMsg() {
    return axios.get(`${url}`);
  }
};

export default esp;

