/*jslint es5: true */
/**
 * @param {Number} value
 * @param {Number} [bitCount = 0]
 * 
 * @returns {String} binary representation of the two's complement of `value`.
 */
function twosComplement(value, bitCount) {
    "use strict";
    let binaryStr;
  
  if (value >= 0) {
    let twosComp = value.toString(2);
    binaryStr = padAndChop(twosComp, '0', (bitCount || twosComp.length));
  } else {
    binaryStr = (Math.pow(2, bitCount) + value).toString(2);
    
    if (Number(binaryStr) < 0) {
      return undefined;
    }
  }
  
  return `0b${binaryStr}`;
}


/**
 * @param {String} str
 * @param {String} padChar
 * @param {Number} length
 */
function padAndChop(str, padChar, length) {
  return (Array(length).fill(padChar).join('') + str).slice(length * -1);
}




// Tests
//----------------------------------

console.log(`0  = ${twosComplement(0, 8)}`);
console.log(`1  = ${twosComplement(1, 8)}`);
console.log(`2  = ${twosComplement(2, 8)}`);
console.log(`13 = ${twosComplement(13, 8)}`);

console.log('');

console.log(`-1 = ${twosComplement(-1, 8)}`);
console.log(`-2 = ${twosComplement(-2, 8)}`);
console.log(`-3 = ${twosComplement(-3, 8)}`);
console.log(`-4 = ${twosComplement(-4, 8)}`);
console.log(`-5 = ${twosComplement(-5, 8)}`);
console.log(`-6 = ${twosComplement(-6, 8)}`);
console.log(`-7 = ${twosComplement(-7, 8)}`);

console.log('');

console.log(`1.5  = ${twosComplement(1.5, 8)}`);
console.log(`1.25 = ${twosComplement(1.25, 8)}`);
console.log(`5.5  = ${twosComplement(5.5, 8)}`);
console.log(`5.75 = ${twosComplement(5.75, 8)}`);
