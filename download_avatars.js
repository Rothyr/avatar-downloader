

var request = require('request');
var secrets = require('./secrets.js')
var fs = require('fs');


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

function downloadImageByURL (url, filePath) {
request.get(url)
       .on('error', function (err) {
         console.log('Error Encounted')
       })
       .pipe(fs.createWriteStream(filePath + '.jpg'))
     }

getRepoContributors("jquery", "jquery", function(error, result) {
  console.log("Errors: ", error);
  result.forEach(function(contributor) {
    downloadImageByURL (contributor.avatar_url, contributor.login)
  })
});



