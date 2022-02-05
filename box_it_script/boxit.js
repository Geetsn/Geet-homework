// Extract input parameters
const names = [];
for (let i = 2; i < process.argv.length; i++) {
  names.push(process.argv[i]);
}

// No name print empty box or list names
function boxIt(names) {
  const TopLeftCorner = "┏";
  const TopRightCorner = "┓";
  const BottomLeftCorner = "┗";
  const BottomRightCorner = "┛";
  // Print an empty box
  if (names.length === 0) {
    console.log(TopLeftCorner + TopRightCorner);
    console.log(BottomLeftCorner + BottomRightCorner);
  } else {
    names.forEach((name) => {
      console.log(name);
    });
  }
}

boxIt(names);
