

console.log(state);
const fs = require("fs");

fs.readFile("gallery/beemo.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const content = "Text";
fs.writeFile("gallery/beemo.txt", content, (err) => {
  if (err) {
    console.err;
    return;
  }
});
