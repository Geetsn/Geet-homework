#!/usr/bin/env node

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
          gridLine += "*";
        } else {
          gridLine += " ";
        }
      }
      grid.push(gridLine);
    }
    console.log(grid.join("\n"));
  }
}

function runTurtle(cmdString) {
  let x = 0;
  let y = 0;
  const commands = cmdString.split("-");
  if (commands[0][0] === "t") {
    const point = commands[0].slice(1).split(",");
    x = parseInt(point[0]);
    y = parseInt(point[1]);
  }
  const myTurtle = new Turtle(x, y);

  commands.forEach((cmd) => {
    switch (cmd[0]) {
      case "f":
        myTurtle.forward(parseInt(cmd.slice(1)));
        break;
      case "r":
        myTurtle.right();
        break;
      case "l":
        myTurtle.left();
        break;
      default:
        break;
    }
  });
  myTurtle.print();
}

runTurtle(process.argv[2]);
