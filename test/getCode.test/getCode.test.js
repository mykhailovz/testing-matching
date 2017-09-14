const mocha = require('mocha');
const assert = require('assert');

const getCode = require('./getCodeMockData').getCode;
const carCollectionFN = require('./getCodeMockData').carBrands;

const carNames = carCollectionFN.map(carItem => carItem.message);
const carCodes = carCollectionFN.map(carItem => carItem.code);

let LENGTH = carCollectionFN.length;

// console.log(carCodes)

for (let i = 0; i < carCollectionFN.length; i++) {

  if (!(carCodes[i] === getCode(carNames[i], carCollectionFN))) {
    console.log(carCodes[i], getCode(carNames[i], carCollectionFN))
    console.log(i);
  }
}

describe('getCode()', () => {
  describe('getting car codes from list of car brands', () => {
    it('should return correct specific code for specific car brand', () => {
      for (let i = 0; i < LENGTH; i++) {
        if (i === 24) {
          /**
           * collection of car brands contain 2 Infinity
           * { code: '4330', message: 'Infinity' },
           * { code: '2003', message: 'Infinity' }
           */
          assert.equal(carCodes[i], '4330');
        } else if (i === 25){
          assert.equal(carCodes[i], '2003');
        } else {
          assert.equal(carCodes[i], getCode(carNames[i], carCollectionFN));
        }
      }
    });
  });
});

// testing car register number and date birth and ssn 
// getCode.test