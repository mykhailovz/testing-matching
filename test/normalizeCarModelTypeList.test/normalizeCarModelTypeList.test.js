const assert = require('assert');

const removeBrackets = require('../removeBrackets.test/removeBracketsMockData').removeBrackets;
const normalizeCarModelTypeList = require('./normalizeCarModelTypeListMockData').normalizeCarModelTypeList;
const normalizeCarModelTypeItem = require('./normalizeCarModelTypeListMockData').normalizeCarModelTypeItem;
const audiCar1999YearA4Model = require('./normalizeCarModelTypeListMockData').audiCar1999YearA4Model;
const audiCar2002YearA4Model = require('./normalizeCarModelTypeListMockData').audiCar2002YearA4Model

const normalizedCollection = normalizeCarModelTypeList(audiCar1999YearA4Model);
const normalizedCollection2 = audiCar1999YearA4Model.map(carAudi => {
  let normCarItem = removeBrackets(carAudi.message);
  return normalizeCarModelTypeItem(normCarItem);
});

const normalizedCollection3 = normalizeCarModelTypeList(audiCar2002YearA4Model);

const normalizedCollection4 = audiCar2002YearA4Model.map(carAudi => {
  let normCarItem = removeBrackets(carAudi.message);
  return normalizeCarModelTypeItem(normCarItem);
});


let LENGTH = audiCar1999YearA4Model.length;

let LENGTH2 = audiCar2002YearA4Model.length;



describe('normalizeCarModelTypeList()', () => {
  describe('normalizing a collection of cars removing [brackets] [trims] [lowerCase]', () => {
    it('should return a normalized item from collection', () => {
      for (let i = 0; i < LENGTH; i++) {
        console.log(
          // audiCar1999YearA4Model[i].message,
          `|||`,
          normalizedCollection2[i]
        );
        assert.equal(normalizedCollection2[i], normalizedCollection[i].message);
      }
    });

    it('should return a normalized collection ', () => {
      for (let i = 0; i < LENGTH2; i++) {
        assert.equal(normalizedCollection3[i].message, normalizedCollection4[i]);
      }
    });

  })
});
