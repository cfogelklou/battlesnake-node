var Coordinate = function (x, y) {
    Object.defineProperties(this, {
        "x": {
            "get": function () { return x; }
        },
        "y": {
            "get": function () { return y; }
        }
    })
}

exports.Coordinate = Coordinate