var app = function(){
  var button = document.getElementById("submit");
  var url = 'https://api.spotify.com/v1/search?q="doom metal"&type=playlist';
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
  var inputValue = this.responseText;
  var search = JSON.parse(inputValue);
  var searchResults = document.getElementById("input").value;
  console.log(inputValue);
}

window.onload = app;