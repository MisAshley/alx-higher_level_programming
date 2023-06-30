#!/usr/bin/node
module.exports = class Rectangle {
  constructor (c, d) {
    if (c > 0 && d > 0) { [this.width, this.height] = [c, d]; }
  }

  print () {
    for (let n = 0; n < this.height; n++) console.log('X'.repeat(this.width));
  }
};
