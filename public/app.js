var app = function(){
  var button = document.getElementById("submit");
  button.onclick = function() {
    var genre = document.getElementById("input").value;
    var url = 'https://api.spotify.com/v1/search?q='+ genre +'&type=playlist';
    makeRequest(url, requestComplete);
  }.bind(this);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var search = JSON.parse(jsonString);
  console.log(search);
  for (i = 0; i < search.playlists.items.length; i++) {
      var returnedPlaylists = search.playlists.items[i];
      var results = document.getElementById("results");
      results.innerText = returnedPlaylists;
    }
}

window.onload = app;