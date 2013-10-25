(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Board = SnakeGame.Board = function(size){
    this.board = new Array(size);
    for (var i = 0; i < size; i++) {
      this.board[i] = [];
      for (var j = 0; j < size; j++) {
        this.board[i].push(".");
      }
    }
  }

  Board.prototype.buildSnake = function(startPos){
    this.snake = new SnakeGame.Snake("N", [startPos]);
  }

  Board.prototype.render = function(){
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board.length; j++) {
        if(this.snake.segments.include([i, j])){
          this.board[i][j] = "S";
        }else{
          this.board[i][j] = ".";
        }
      }
    }
  }

  Array.prototype.include = function(arr){
    var exist = false;
    this.forEach(function(element){
      if(element[0] === arr[0] && element[1] === arr[1]){
        exist = true;
      }
    })
    return exist;
  }



})(this);