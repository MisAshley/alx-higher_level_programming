#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let b = 0; b < size; b++) {
    let row = '';
    for (let n = 0; n < size; n++) row += 'X';
    console.log(row);
  }
}
