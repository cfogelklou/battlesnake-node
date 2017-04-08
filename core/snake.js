var Coordinate = require('./coordinate.js').Coordinate
var BoardCellType = require('./boardCellType.js').BoardCellType

var Move =
{
    Up: "up",
    Right: "right",
    Down: "down",
    Left: "left"
}

function Snake(data, state) {
    var id = data.id
    var name = data.name
    var taunt = data.taunt
    var health_points = health_points
    var coords = data.coords.map(coord => new Coordinate(coord[0], coord[1]))

    var head = coords[0];

    Object.defineProperties(this, {
        "id": { "get": function () { return id; } },
        "name": { "get": function () { return name; } },
        "taunt": { "get": function () { return taunt; } },
        "health_points": { "get": function () { return health_points; } },
        "head": { "get": function () { return head; } },
        "coords": { "get": function () { return coords; } }
    });

    function isOk(board, direction) {
        var peekType = board.Peek(head, direction);

        if (peekType == BoardCellType.Empty || peekType == BoardCellType.Food) {
            return true;
        } else {
            return false;
        }
    }

    function distance(coordinate) {
        var xDistance = Math.abs(head.x - coordinate.x);
        var yDistance = Math.abs(head.y - coordinate.y);

        return (xDistance + yDistance);
    }

    var distanceComparer = function (coordinate1, coordinate2) {

        var distance1 = distance(coordinate1);
        var distance2 = distance(coordinate2);

        if (distance1 < distance2) {
            return -1;
        }

        if (distance1 > distance2) {
            return 1;
        }

        return 0;
    }

    this.update = function () {
        if (state.food.length > 0) {
            var food = state.food.sort(distanceComparer)[0];

            if (head.x < food.x && isOk(state.board, Move.Right)) {
                return Move.Right;
            }

            if (head.x > food.x && isOk(state.board, Move.Left)) {
                    return Move.Left;
            }

            if (head.y < food.y && isOk(state.board, Move.Down)) {
                return Move.Down;
            }

            if (head.y > food.y && isOk(state.board, Move.Up)) {
                return Move.Up;
            }
        }

        if (isOk(state.board, Move.Right)) {
            return Move.Right;
        }

        if (isOk(state.board, Move.Left)) {
            return Move.Left;
        }

        if (isOk(state.board, Move.Down)) {
            return Move.Down;
        }

        return Move.Up;
    }
}

exports.Snake = Snake
exports.Move = Move
