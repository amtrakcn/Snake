(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var View = SnakeGame.View = function($el){
    this.$el = $el
  }

  View.prototype.start = function($el){
    var board = new SnakeGame.Board(21);
    board.buildSnake([10,10]);
    board.render();
    this.$el.on("keydown", function(operation){


    })
  }

})(this);