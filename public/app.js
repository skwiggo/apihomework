var app = function(){
  var button = document.getElementById("submit");
  button.onclick = function() {
    var genre = document.getElementById("input").value;
    var url = 'https://api.spotify.com/v1/search?q=' + genre + '&type=playlist';
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
  var inputValue = this.responseText;
  var search = JSON.parse(inputValue);
  console.log(inputValue);
}

window.onload = app;