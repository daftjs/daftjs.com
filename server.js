var express = require('express')
var app = express()

app.use(express.static('build'))

app.get('*', function (req, res) {
  res.sendfile('./public/' + req.originalUrl)
})

var server = app.listen(process.env.PORT || 1981, function () {
  console.log('Example app listening at http://localhost:' + server.address().port)
})
