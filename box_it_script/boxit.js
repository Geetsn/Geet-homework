// Extract input parameters
const names = [];
for (let i = 2; i < process.argv.length; i++) {
  names.push(process.argv[i]);
}

// List names without boxes
function boxIt(names) {
  names.forEach((name) => {
    console.log(name);
  });
}

boxIt(names);
