

var request = require('request');
var secrets = require('./secrets.js')

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, callback) {
  var options ={
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'Authorization': 'token ' + secrets.GITHUB_TOKEN
      'User-Agent': 'request'
    }
  };

  request(url, function(error, result, body) {
    callback(error, body);

  });

}





getRepoContributors("jquery", "jquery", function(error, result) {
  console.log("Errors: ", error);
  console.log("Result: ", result);
});