let bitcoin;
let ethereum;
let litecoin;
let monero;
let bitPrice;
let ethPrice;
let litPrice;
let monPrice;
let bitamt;
let ethAmt;
let litAmt;
let monAmt;
const prices = [];
let price;

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
    
function btc(){
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  bitcoin = ((JSON.parse(r1.target.response).data[0].quote.USD.price));

function push(){
  prices.push(bitcoin);
}
push();
}).catch(err => {
    console.log(err);
});


}

function eth(){
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  ethereum = ((JSON.parse(r1.target.response).data[1].quote.USD.price));

  function push(){
  prices.push(ethereum);
}
push();
}).catch(err => {
    console.log(err);
});


}

function ltc(){
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  litecoin = ((JSON.parse(r1.target.response).data[6].quote.USD.price));

  function push(){
  prices.push(litecoin);
}
push();
}).catch(err => {
    console.log(err);
});


}

function xmr(){
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  monero = ((JSON.parse(r1.target.response).data[13].quote.USD.price));

  function push(){
  prices.push(monero);
}
push();
}).catch(err => {
    console.log(err);
});


}

request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  console.log(JSON.parse(r1.target.response));

  function push(){
  prices.push(bitcoin);
}
}).catch(err => {
    console.log(err);
})

btc();
eth();
ltc();
xmr();
