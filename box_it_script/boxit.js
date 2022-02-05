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
    names.forEach((name) => {
      // A name in a box
      console.log(
        TopLeftCorner + MiddleLine.repeat(name.length) + TopRightCorner
      );
      console.log(SideLine + name + SideLine);
      console.log(
        BottomLeftCorner + MiddleLine.repeat(name.length) + BottomRightCorner
      );
    });
  }
}

boxIt(names);
