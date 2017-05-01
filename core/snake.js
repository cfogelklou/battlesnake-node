var Coordinate = require('./coordinate.js').Coordinate

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

    // Main method - this is where the magic should happen!

    this.update = function () {

        return Move.Right;

    }
}

exports.Snake = Snake
exports.Move = Move
