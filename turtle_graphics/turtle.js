class Turtle {
  constructor(x, y) {
    this.currPoint = [x, y];
    this.visitedPoints = [[this.currPoint[0], this.currPoint[1]]]; // store the current point as visited

    this.currDirection = 0; // 0 right, 1 down, 2 left, 3 up
  }
  forward(steps) {
    for (let step = 0; step < steps; step++) {
      switch (this.currDirection) {
        case 0:
          this.currPoint[0] += 1; // Increase x axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          break;
        case 1:
          this.currPoint[1] += 1; // Increase y axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          break;
        case 2:
          this.currPoint[0] -= 1; // Decrease x axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          break;
        case 3:
          this.currPoint[1] -= 1; // Decrease y axis value
          this.visitedPoints.push([this.currPoint[0], this.currPoint[1]]);
          break;
        default:
          break;
      }
    }
    return this; // For chaining
  }
  right() {
    this.currDirection += 1;
    this.currDirection %= 4;
    return this;
  }
  left() {
    this.currDirection -= 1;
    this.currDirection %= 4;
    return this;
  }
  allPoints() {
    return this.visitedPoints;
  }
}

const myTurtle = new Turtle(0, 0).forward(3).right().left().forward(3);
console.log(myTurtle.allPoints());
