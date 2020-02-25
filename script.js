// var apikey = {
//     key:'cfc1cb36-d937-441c-8d9a-5964f940434c'
// }
    
// request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
// .then((r1) => {
//     console.log(r1);
// }).catch(err => {
//     console.log(err);
// })  
    
// function request(method, url) {
//         return new Promise(function (resolve, reject) {
//             var xhr = new XMLHttpRequest();
//             xhr.open(method, url);
//             xhr.onload = resolve;
//             xhr.onerror = reject;
//             xhr.send();
//         });
// }
 
/* Example in Node.js ES6 using request-promise */

const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
  qs: {
    'symbol': 'BTC,USDT,BNB'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});