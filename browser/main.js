var request = require('superagent');

var api = 'http://localhost:8080';
console.log(api);

function getResource(resource, next) {
  request
    .get(api + '/' + resource)
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if (err)
        return console.log('Error : ', err);
      if (next)
        next(res.body);
    });
}

window.log = function(data) {
  console.log(data);
}

document.addEventListener( 'DOMContentLoaded', function() {
  if (window.location.pathname == '/users')
    getResource('users', log);
  else
    getResource('problems', log);
});
