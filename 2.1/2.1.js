const fs = require("fs");

fs.writeFileSync("text.txt", "ok");
fs.copyFileSync("text.txt", "copiedtext.txt");
fs.renameSync("text.txt", "newtext.txt");
fs.readdir("./", (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.readFileSync("newtext.txt");
