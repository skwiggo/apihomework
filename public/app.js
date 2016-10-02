var app = function(){
  var url = 'https://api.spotify.com/v1/search';
  var button = document.querySelector('submit');
  button.onclick = makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var search = this.responseText;
  var results = JSON.parse(search);
  console.log(search);
}

window.onload = app;