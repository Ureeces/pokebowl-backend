// Your code here.
// Note that you do NOT need the data for this function!

// Problem - Given the row of the pokemon, which is a subarray,
// return the url
// URL is at index 1 of the row

// 1. Simply return the index 1 at the given row, which is a subarray
// 2. If row is equal to null, return null
const getUrl = function(row) {
  if(row === null) {
    return null;
  }
  
  return row[1];
}


// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
