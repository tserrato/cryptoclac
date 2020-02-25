var apikey = {
    key:'cfc1cb36-d937-441c-8d9a-5964f940434c'
}

function request(method, url) {
  return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = resolve;
      xhr.onerror = reject;
      xhr.send();
  });
}
    
function getBTC(){
  request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=12&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  return (JSON.parse(r1.target.response).data[0].quote.USD.price);
}).catch(err => {
    console.log(err);
})
}  

function getETH(){
  request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=12&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  return (JSON.parse(r1.target.response).data[1].quote.USD.price);
}).catch(err => {
    console.log(err);
})
}

function getLTC(){
  request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=12&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  return (JSON.parse(r1.target.response).data[6].quote.USD.price);
}).catch(err => {
    console.log(err);
})
}

function getXMR(){
  request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=12&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  return (JSON.parse(r1.target.response).data[11].quote.USD.price);
}).catch(err => {
    console.log(err);
})
}  
    

let prices = [];



function arrayPush(){
  prices.push(getBTC());
  prices.push(getETH());
  prices.push(getLTC());
  prices.push(getXMR());

  console.log(prices);
}

arrayPush();