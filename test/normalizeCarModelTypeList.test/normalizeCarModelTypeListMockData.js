const removeBrackets = require('../removeBrackets.test/removeBracketsMockData').removeBrackets;

function normalizeCarModelTypeList(collection) {
  let clonedCollection = collection.map(item => Object.assign({}, item));

  clonedCollection.map(item => {
    item.message = removeBrackets(item.message);
    item.message = item.message.toLowerCase().trim();
    item.message = item.message.replace(/-/g, '');
  });

    return clonedCollection;
}

function normalizeCarModelTypeItem(item) {
  if (typeof item !== 'string') {
    throw new Error('Parameter should be a string');
  }
  let clonedStr = item.toLowerCase().trim().replace(/-/g, '');

  return clonedStr;
}

let audiCar1999YearA4Model = [
  {
    "id": 0,
    "questionId": null,
    "code": "7838",
    "message": "1,6 aut Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:361"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7864",
    "message": "1.6 aut ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:362"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7841",
    "message": "1,6 Avant Business ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:363"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7839",
    "message": "1,6 Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:364"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7840",
    "message": "1,6 Business ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:365"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7862",
    "message": "1,6 ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:366"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7842",
    "message": "1,8 5V aut Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:367"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7860",
    "message": "1.8 5V aut ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:368"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7843",
    "message": "1,8 5V Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:369"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7844",
    "message": "1,8 5V Quattro Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:370"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7857",
    "message": "1.8 5V Quattro ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:371"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7861",
    "message": "1.8 5V ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:372"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7848",
    "message": "1,8 5VT 180hk Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:373"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7851",
    "message": "1,8 5VT 180hk Quattro ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:374"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7849",
    "message": "1,8 5VT 180hk Quttro Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:375"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7845",
    "message": "1,8 5VT 180hk ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:376"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7847",
    "message": "1,8 5VT aut Tiptronic ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:377"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7846",
    "message": "1,8 5VT Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:378"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7852",
    "message": "1,8 5VT Quattro Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:379"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7858",
    "message": "1.8 5VT Quattro ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:380"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7859",
    "message": "1.8 5VT ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:381"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7850",
    "message": "1,8 5VT Tiptronic Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:382"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7866",
    "message": "1,9 TDI 110hk aut ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:383"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7865",
    "message": "1,9 TDI 110hk ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:384"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7867",
    "message": "1,9 TDI aut Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:385"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7855",
    "message": "1.9 TDI aut ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:386"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7863",
    "message": "1,9 TDI Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:387"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7856",
    "message": "1.9 TDI ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:388"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7853",
    "message": "2,4 V6 Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:389"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7832",
    "message": "2,4 V6 Quattro Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:390"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7854",
    "message": "2,4 V6 Quattro ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:391"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7834",
    "message": "2,4 V6 ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:392"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7833",
    "message": "2,4 V6 Tiptronic Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:393"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7831",
    "message": "2,4 V6 Tiptronic ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:394"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7837",
    "message": "2,8 aut Tiptronic ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:395"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7836",
    "message": "2,8 Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:396"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7830",
    "message": "2,8 Quattro Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:397"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7827",
    "message": "2,8 Quattro ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:398"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7835",
    "message": "2,8 ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:399"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7826",
    "message": "2,8 Tiptronic Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:400"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7828",
    "message": "2,8 Tiptronic Quattro Avant ( Stasjonsvogn 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:401"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7829",
    "message": "2,8 Tiptronic Quattro ( Sedan 1 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:402"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7825",
    "message": "2,8 Tiptronic Quattro ( Stasjonsvogn Udefinert )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:403"
  }
];

module.exports = {
  normalizeCarModelTypeList,
  normalizeCarModelTypeItem,
  audiCar1999YearA4Model
};
