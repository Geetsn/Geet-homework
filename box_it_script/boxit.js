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
    // All names in the largest box with dividers
    console.log(TopLeftCorner + MiddleLine.repeat(maxLength) + TopRightCorner);
    names.forEach((name, index) => {
      console.log(
        SideLine + name + " ".repeat(maxLength - name.length) + SideLine
      );
      if (index < names.length - 1) {
        console.log(LeftSideT + MiddleLine.repeat(maxLength) + RightSideT);
      }
    });
    console.log(
      BottomLeftCorner + MiddleLine.repeat(maxLength) + BottomRightCorner
    );
  }
}

boxIt(names);
