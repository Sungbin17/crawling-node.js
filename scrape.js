var request = require('request');
var cheerio = require('cheerio');
const fetch = require("node-fetch");
var fs = require('fs');

var url = 'https://dog.ceo/api/breeds/image/random';
var number_of_pictures = 20;



const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    // return json
    // console.log(json);
    return json.message
  } catch (error) {
    // console.log(error);
  }
};


const download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


function getFileName(url){
	var splitArray = url.split('/')
	var name = splitArray[splitArray.length-1];
	return name;
}



for (i = 0; i < number_of_pictures; i++) {
	console.log(i)
	getData(url).then(message=>{
		download(message, getFileName(message), function(){
		});
	})
}















