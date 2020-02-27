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
  let bitcoin = (JSON.parse(r1.target.response).data[0].quote.USD.price);
  console.log(bitcoin);
}).catch(err => {
    console.log(err);
});

return bitcoin
}

function eth(){
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  let etherium = (JSON.parse(r1.target.response).data[1].quote.USD.price)
  console.log(etherium);
}).catch(err => {
    console.log(err);
});

return etherium
}

function ltc(){
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  let litecoin = (JSON.parse(r1.target.response).data[6].quote.USD.price);
  console.log(litecoin);
}).catch(err => {
    console.log(err);
});

return litecoin
}

function xmr(){
request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  let monero = (JSON.parse(r1.target.response).data[12].quote.USD.price);
  console.log(monero);
}).catch(err => {
    console.log(err);
});

return monero
}

request('GET','https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20&CMC_PRO_API_KEY=' + apikey.key)
.then((r1) => {
  console.log(JSON.parse(r1.target.response));
}).catch(err => {
    console.log(err);
})

function calculateTotla(){
  
}