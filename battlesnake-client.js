var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 3000

var jsonParser = bodyParser.json()

app.listen(port);

console.log('todo list RESTful API server started on: ' + port)

app.route('/')
   .get(function(req, res) {

    res.json({command:"pong!"})

})



   app.post('/start', jsonParser, function(req, res) {

       res.json({command:"pong!"})

   })

   app.post('/move', jsonParser, function(req, res) {

       var data = req.body;

       var gameStatus = new GameStatus(data);

       res.json({command:"pong!"})

   })
