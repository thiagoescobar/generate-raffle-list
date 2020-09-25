var fs = require('fs');
var firstNumber=1; // first number in picture name that you want to download
var lastNumber=100; // last number in picture name that you want to download 
var available = new Array;
available = Array.from({length: lastNumber}, (_, i) => i + firstNumber);// populates the list array with firstNumber..lastNumber
fs.writeFile('available.txt','', function(err){
  if (err) throw err;
  console.log('Saved!');
}); //creates an empty file named list.txt and logs Saved on console or throws error
var chosen = fs.readFileSync('file.txt').toString().split("\n");
for(i in chosen) {
	var value = chosen[i];
	available[(value-1)]=0;
}
for (i in available){
	if (available[i]!=0){
		const value=available[i];
		fs.appendFile('available.txt', available[i]+ '\n', function(err){
			if(err) throw err;
			console.log('Valor inserido='+value);
		});
	}
}
