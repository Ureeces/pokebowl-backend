// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');

const getRow = function(search) {
  for(const mon of pokemon) {
    if(search === mon[0]) {
      return mon;
    }
  }

  return null;
}

// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
