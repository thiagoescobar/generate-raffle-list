const fs = require("fs");

const LINE_FEED = '\n';

// first number in picture name that you want to download
const firstNumber = 1; 
// last number in picture name that you want to download
const lastNumber = 100;

const chosen = fs.readFileSync("file.txt").toString().split(LINE_FEED);

let outputStream = '';

for (let number = firstNumber; number <= lastNumber; ++number) {
  if (!chosen.includes(String(number))) {
	outputStream += String(number + LINE_FEED);
  }
}

// Creates an empty file named list.txt and logs Saved on console or throws error
fs.writeFile("available.txt", outputStream, function (err) {
	if (err) {
		throw err;
	}
	console.log("Saved!");
}); 
