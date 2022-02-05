#!/usr/bin/env node

// Extract input parameters
const names = [];
for (let i = 2; i < process.argv.length; i++) {
  names.push(process.argv[i]);
}

// No name print empty box or a name in a box
function boxIt(names) {
  const TopLeftCorner = "┏";
  const TopRightCorner = "┓";
  const BottomLeftCorner = "┗";
  const BottomRightCorner = "┛";
  const MiddleLine = "━";
  const SideLine = "┃";
  const LeftSideT = "┣";
  const RightSideT = "┫";
  let boxedNames = ""
  // Print an empty box
  if (names.length === 0) {
    boxedNames += TopLeftCorner + TopRightCorner + "\n";
    boxedNames += BottomLeftCorner + BottomRightCorner;
    return boxedNames
  } else {
    // Find the longest name length
    let maxLength = 0;
    names.forEach((name) => {
      if (name.length > maxLength) {
        maxLength = name.length;
      }
    });
    // All names in the largest box with dividers
    boxedNames += TopLeftCorner + MiddleLine.repeat(maxLength) + TopRightCorner +"\n";
    names.forEach((name, index) => {
      boxedNames += SideLine + name + " ".repeat(maxLength - name.length) + SideLine +"\n";
    
      if (index < names.length - 1) {
        boxedNames += LeftSideT + MiddleLine.repeat(maxLength) + RightSideT +"\n";
      }
    });
    
    boxedNames +=  BottomLeftCorner + MiddleLine.repeat(maxLength) + BottomRightCorner 
    return boxedNames
  }
}

console.log(boxIt(names));
