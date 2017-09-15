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

let audiCar2002YearA4Model = [
  {
    "id": 0,
    "questionId": null,
    "code": "13614",
    "message": "1,6 Avant Business ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:367"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13615",
    "message": "1,6 Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:368"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13616",
    "message": "1,6 ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:369"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13610",
    "message": "1,8 5VT Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:370"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13612",
    "message": "1,8 5VT Multitronic ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:371"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13611",
    "message": "1,8 5VT Multitronic ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:372"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13608",
    "message": "1,8 5VT Quattro ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:373"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13609",
    "message": "1,8 5VT Quattro ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:374"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13613",
    "message": "1,8 5VT ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:375"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13598",
    "message": "1,9 TDI 100hk Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:376"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13599",
    "message": "1,9 TDI 100hk ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:377"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13594",
    "message": "1,9 TDI 130hk Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:378"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13597",
    "message": "1,9 TDI 130hk Quattro ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:379"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13596",
    "message": "1,9 TDI 130hk Quattro ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:380"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13595",
    "message": "1,9 TDI 130hk ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:381"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13601",
    "message": "2,0 5V Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:382"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13602",
    "message": "2,0 5V Multitronic ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:383"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13605",
    "message": "2,0 Multitronic ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:384"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13600",
    "message": "2,0 ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:385"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13604",
    "message": "2,4 Multitronic ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:386"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13603",
    "message": "2,4 Multitronic ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:387"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13607",
    "message": "2,4 ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:388"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13606",
    "message": "2,4 ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:389"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13582",
    "message": "2,5 TDI V6 Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:390"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13585",
    "message": "2,5 TDI V6 Multitronic ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:391"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13583",
    "message": "2,5 TDI V6 Multitronic ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:392"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13586",
    "message": "2,5 TDI V6 Quattro ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:393"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13580",
    "message": "2,5 TDI V6 Quattro ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:394"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13584",
    "message": "2,5 TDI V6 ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:395"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13581",
    "message": "2,5 TDI V6 Tiptronic Quattro ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:396"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13579",
    "message": "2,5 TDI V6 Tiptronic ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:397"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13587",
    "message": "3,0 Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:398"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13588",
    "message": "3,0 Multitronic Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:399"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13589",
    "message": "3,0 Quattro Avant ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:400"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13590",
    "message": "3,0 Tiptronic Quattro ( Stasjonsvogn 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:401"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13578",
    "message": "3,0 V6 Multitronic ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:402"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13593",
    "message": "3,0 V6 Quattro ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:403"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13591",
    "message": "3,0 V6 ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:404"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "13592",
    "message": "3,0 V6 Tiptronic Quattro ( Sedan 2 )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:405"
  }
];

module.exports = {
  normalizeCarModelTypeList,
  normalizeCarModelTypeItem,
  audiCar1999YearA4Model,
  audiCar2002YearA4Model
};
