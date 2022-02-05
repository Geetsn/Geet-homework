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
  // Print an empty box
  if (names.length === 0) {
    console.log(TopLeftCorner + TopRightCorner);
    console.log(BottomLeftCorner + BottomRightCorner);
  } else {
    // Find the longest name length
    let maxLength = 0;
    names.forEach((name) => {
      if (name.length > maxLength) {
        maxLength = name.length;
      }
    });
    names.forEach((name) => {
      // All names in the largest name box
      console.log(
        TopLeftCorner + MiddleLine.repeat(maxLength) + TopRightCorner
      );
      console.log(SideLine + name + " ".repeat(maxLength-name.length) + SideLine);
      console.log(
        BottomLeftCorner + MiddleLine.repeat(maxLength) + BottomRightCorner
      );
    });
  }
}

boxIt(names);
