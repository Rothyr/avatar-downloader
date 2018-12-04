

var request = require('request');
var secrets = require('./secrets.js')

console.log('Welcome to the GitHub Avatar Downloader!');


function getRepoContributors(repoOwner, repoName, callback) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'Authorization': ' token ' + secrets.GITHUB_TOKEN,
      'User-Agent': 'request'
    }
  };

  request(options, function(error, result, body) {
    var data = JSON.parse(body);
    callback(error, data);
  });

}

getRepoContributors("jquery", "jquery", function(error, result) {
  console.log("Errors: ", error);
  result.forEach(function(contributor){
    console.log(contributor.avatar_url);
  })
});
