function GameStatus(data) {
    var myId = data.you
    var width = data.width
    var height = data.height
    var food = data.food.map(food => new Food(food))

    var board = new Board(myId, width, height, food, deadSnakes, snakes);

    this.getBoard = function() { return board }

    [JsonProperty("you")]
    public string You { get; set; }

    [JsonProperty("width")]
    public int Width { get; set; }

    [JsonProperty("height")]
    public int Height { get; set; }

    [JsonProperty("turn")]
    public int Move { get; set; }

    [JsonProperty("snakes")]
    public Snake[] Snakes { get; set; }

    [JsonProperty("dead_snakes")]
    public Snake[] DeadSnakes { get; set; }

    [JsonProperty("food")]
    public Coordinate[] Food { get; set; }
}
}
