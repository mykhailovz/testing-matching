const mocha = require('mocha');
const assert = require('assert');

const removeBrackets = require('./removeBracketsMockData').removeBrackets;
const carVariantNames = require('./removeBracketsMockData').carVariantNames;
const bmwCar2006Year5Ser = require('./removeBracketsMockData').bmwCar2006Year5Ser;

const normalizedCollection = bmwCar2006Year5Ser.map(bmwCar => {
  return removeBrackets(bmwCar.message);
});

let LENGTH = bmwCar2006Year5Ser.length;

describe('removeBrackets()', () => {
  describe('remove specified brackets from strings', () => {
    it('should remove a specific brackets from string to normalize', () => {
      for (let i = 0; i < LENGTH; i++) {
        console.log(
          bmwCar2006Year5Ser[i].message,
          `|||`,
          normalizedCollection[i]
        );
        assert.equal(normalizedCollection[i], removeBrackets(bmwCar2006Year5Ser[i].message));
      }
    });
  });
});
