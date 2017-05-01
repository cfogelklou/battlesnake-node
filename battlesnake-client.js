
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 3304

var GameStatus = require('./core/gameStatus.js').GameStatus

var jsonParser = bodyParser.json()

var snakeId = 1;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port)

app.route('/')
   .get(function(req, res) {

       res.json({command:"pong!"})

   })



app.post('/start', jsonParser, function(req, res) {

    var data = req.body;

    var game_id = data.game_id
    var height = data.height
    var width = data.width

    res.json({
        "color": "#FF0000",
        "secondary_color": "#00FF00",
        "head_url": "http://placecage.com/c/100/100",
        "name": "nodeSnake" + snakeId++,
        "taunt": "OH GOD NOT THE BEES",
        "head_type": "pixel",
        "tail_type": "pixel"
    })
})

app.post('/move', jsonParser, function(req, res) {

    var data = req.body

    var gameStatus = new GameStatus(data)

    var move = gameStatus.you.update()
    var taunt = "OUTTA MY WAY SNAKE!"

    res.json({move:move, taunt:taunt})

})
