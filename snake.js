(function (root) {
  var SnakeGame = root.SnakeGame = (root.SnakeGame || {});

  var Snake = SnakeGame.Snake = function(direction, segments){
    this.direction = Snake.DIRVECS[Snake.DIRS.indexOf(direction)]
    this.segments = segments
  }

  Snake.DIRVECS = [[0,1],[1,0],[0,-1],[-1,0]]
  Snake.DIRS = ["N", "E", "S", "W"]

  Coord = function(x, y){
    this.x = x
    this.y = y
  }

  Coord.prototype.plus = function(anotherCoord){
    this.x += anotherCoord.x
    this.y += anotherCoord.y
  }

  Snake.prototype.move = function() {
    lastSegment = this.segments.pop()
    newSegment = lastSegment.slice()
    newSegment[0] += this.direction[0]
    newSegment[1] += this.direction[1]
    this.segments.push(lastSegment)
    this.segments.push(newSegment)
    this.segments.shift()
  }

  Snake.prototype.turn = function(newDirection) {
    this.direction = Snake.DIRVECS[Snake.DIRS.indexOf(direction)]
  }

})(this);
