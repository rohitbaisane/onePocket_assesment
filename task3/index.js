const fs = require('fs');

const data = fs.readFileSync('task3/data.txt', 'utf-8');

let totalWords = data.split(/\s+/);
totalWords = totalWords.filter((word) => { return word !== '' });

console.log(`The total count of words is ` + totalWords.length);