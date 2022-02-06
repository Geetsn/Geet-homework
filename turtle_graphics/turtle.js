class Turtle {
  constructor(x, y) {
    this.currPoint = [x, y];
    this.visitedPoints = [[x, y]]; // store the current point as visited

    this.currDirection = 0; // 0 right, 1 down, 2 left, 3 up
    this.minX = x;
    this.maxX = x;
    this.minY = y;
    this.maxY = y;
  }
  forward(steps) {
    for (let step = 0; step < steps; step++) {
      switch (this.currDirection) {
        case 0:
          this.currPoint[0] += 1; // Increase x axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          if (this.currPoint[0] > this.maxX) {
            this.maxX = this.currPoint[0];
          }
          break;
        case 1:
          this.currPoint[1] += 1; // Increase y axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          if (this.currPoint[1] > this.maxY) {
            this.maxY = this.currPoint[1];
          }
          break;
        case 2:
          this.currPoint[0] -= 1; // Decrease x axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          if (this.currPoint[0] < this.minX) {
            this.minX = this.currPoint[0];
          }
          break;
        case 3:
          this.currPoint[1] -= 1; // Decrease y axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          if (this.currPoint[1] < this.minY) {
            this.minY = this.currPoint[1];
          }
          break;
        default:
          break;
      }
    }
    return this;
  }
  right() {
    this.currDirection += 1;
    this.currDirection %= 4;
    return this;
  }
  left() {
    this.currDirection += 3;
    this.currDirection %= 4;
    return this;
  }
  allPoints() {
    return this.visitedPoints;
  }
  print() {
    const grid = [];
    for (let y = this.minY; y <= this.maxY; y++) {
      let gridLine = "";
      for (let x = this.minX; x <= this.maxX; x++) {
        if (
          this.visitedPoints.findIndex(
            (point) => point[0] === x && point[1] === y
          ) > -1
        ) {
          gridLine += "■";
        } else {
          gridLine += "□";
        }
      }
      grid.push(gridLine);
    }
    console.log(grid.join("\n"));
  }
}

const yourTurtle = new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();
