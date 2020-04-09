const fetch = require("node-fetch");

var url = 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=';
var page = 2;



const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json
  } catch (error) {
  }
};


for (i = 1; i < page; i++) {
	getData(url+i).then(response=>{
	
  var storeInfos = response.storeInfos;
  
  console.log(storeInfos)
	})
}















