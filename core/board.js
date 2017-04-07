function Board(data) {

    var myId = ;
    var width = ;
    var height = ;
    var food = ;
    var deadSnakes = ;
    var snakes = ;

    var setBoardPositionType = function (coordinate, cellType) {
        grid[coordinate.x, coordinate.y] = cellType;
    }

    var setPointArray = function (coordinates, boardCellType) {
        if (coordinates == null) return

        for (var point in coordinates) {
            setBoardPositionType(point, boardCellType)
        }
    }

    var grid = new Array(width, height)

    for (var x = 0; x < width; X++) {
        grid[x] = [];
    }

    setPointArray(food, BoardCellType.Food);

    if (deadSnakes != null)
        for (var deadSnake in deadSnakes)
            setPointArray(deadSnake.Coordinates, BoardCellType.Dead);

    for (var snake in snakes) {
        var coords = snake.Coordinates;

        var boardCellType = snake.Id == myId ? BoardCellType.Me : BoardCellType.Enemy;

        setPointArray(coords, boardCellType);
    }

    this.GetCellType = function (x, y) {
        if (x < 0 || x >= width || y < 0 || y >= height)
            return BoardCellType.Wall;

        return grid[x, y] || BoardCellType.Empty;
    }

    this.Peek(peekCoordinate, direction)
    {
        var peekX = peekCoordinate.X + directionOffset[direction].X;
        var peekY = peekCoordinate.Y + directionOffset[direction].Y;

        return GetCellType(peekX, peekY);
    }
}

export Board

