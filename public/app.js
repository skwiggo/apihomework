var app = function(){
  var button = document.querySelector('submit');
  button.onclick = function() {
    var url = 'https://api.spotify.com/v1/search?q="doom metal"&type=playlist';
    makeRequest(url, requestComplete);
  }.bind(this);
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
  console.log(results);
}

window.onload = app;