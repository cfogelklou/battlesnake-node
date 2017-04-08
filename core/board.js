var BoardCellType = require('./boardCellType.js').BoardCellType
var Move = require('./snake.js').Move
var Coordinate = require('./coordinate.js').Coordinate

var directionOffset = {};
directionOffset["up"] = new Coordinate(0, -1)
directionOffset["right"] = new Coordinate(1, 0)
directionOffset["down"] = new Coordinate(0, 1)
directionOffset["left"] = new Coordinate(-1, 0)

var Board = function (data) {

    var you = data.you
    var turn = data.turn
    var width = data.width
    var height = data.height
    var food = data.food
    var snakes = data.snakes
    var dead_snakes = data.dead_snakes

    var setBoardPositionType = function (coordinate, cellType) {
        grid[coordinate.x][coordinate.y] = cellType;
    }

    var setPointArray = function (coordinates, boardCellType) {
        if (coordinates == null) return

        for (var index in coordinates) {
            var point = coordinates[index]
            setBoardPositionType(point, boardCellType)
        }
    }

    var grid = []

    for (var x = 0; x < width; x++) {
        grid[x] = [];
    }
   
    if (dead_snakes != null) {
        for (var index in dead_snakes) {
            var dead_snake = dead_snakes[index]
            setPointArray(dead_snake.coords, BoardCellType.Dead);
        }
    }
        
    for (var index in snakes) {
        var snake = snakes[index]
        var coords = snake.coords;

        var boardCellType = snake.Id == you.id ? BoardCellType.Me : BoardCellType.Enemy;

        setPointArray(coords, boardCellType);
    }

    // -- tricky! food has precedence over snakes, so you can cross a snake if there is food!
    setPointArray(food, BoardCellType.Food);

    this.GetCellType = function (x, y) {
        if (x < 0 || x >= width || y < 0 || y >= height) {
            return BoardCellType.Wall;
        }

        return grid[x][y] || BoardCellType.Empty;
    }

    this.Peek = function (peekCoordinate, direction) {
        var peekX = peekCoordinate.x + directionOffset[direction].x;
        var peekY = peekCoordinate.y + directionOffset[direction].y;

        return this.GetCellType(peekX, peekY);
    }
}

exports.Board = Board

