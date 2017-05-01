var Snake = require('./snake.js').Snake
var Coordinate = require('./coordinate.js').Coordinate

var GameStatus = function (data) {
    var turn = data.turn
    var width = data.width
    var height = data.height
    var food = data.food.map(food => new Coordinate(food[0], food[1]))
    var snakes = data.snakes.map(snake => new Snake(snake, this))
    
    var dead_snakes = data.dead_snakes ? data.dead_snakes.map(snake => new Snake(snake, this)) : null

    var you = snakes.find(s => s.id === data.you);

    Object.defineProperties(this, {
        "you": {
            "get": function () { return you; }
        },
        "turn": {
            "get": function () { return turn; }
        },
        "width": {
            "get": function () { return width; }
        },
        "height": {
            "get": function () { return height; }
        },
        "food": {
            "get": function () { return food; }
        },
        "dead_snakes": {
            "get": function () { return dead_snakes; }
        },
        "snakes": {
            "get": function () { return snakes; }
        }
    });    
}

exports.GameStatus = GameStatus
