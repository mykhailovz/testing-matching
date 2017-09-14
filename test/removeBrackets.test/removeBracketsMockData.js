function removeBrackets(str) {
  let regex = new RegExp(/[()]/g);
  if (regex.test(str)) {
    let bracketLength = str.match(/[()]/g).length;
    let START = 0;
    let END = 0;

    let normalizedString = '';

    switch (bracketLength) {
      case 2: {
        START = str.indexOf('(');
        END = str.indexOf(')');
        normalizedString = str.slice(0, START - 1);
        break;
      }

      case 4: {
        let firstOpenBracket = str.indexOf('(');
        let secondOpenBracket = str.indexOf('(', firstOpenBracket + 1);
        let firstClosedBracket = str.indexOf(')', firstOpenBracket + 1);

        if (firstClosedBracket < secondOpenBracket) {
          let START = str.indexOf(')');
          let END = str.indexOf('(', START + 1);

          normalizedString = str.slice(0, END - 1); 
        } else {
          let END = str.indexOf('(');
  
          normalizedString = str.slice(0, END - 1);
        }
        break;
      }

      case 6: {
        let startPos = str.indexOf(')');
        START = str.indexOf('(', startPos);
        END = str.lastIndexOf(')');
        normalizedString = str.slice(0, START - 1);
        break;
      }
    }

    return normalizedString;
  } else {
    return str;
  }
}

let carVariantNames = [
  '2,0 TDI 120 hk',
  '3.0d',
  '1,4 HDI SX Euro4',
  '2,0 TDCi 140hk Titanium aut',
  '2,0 i-VTEC Comfort 4WD aut.',
  '2,0 MPI Exclusive 4WD Aut.',
  '2,2D 150hk Core 4x4 aut.',
  '2,0 CRDi E 4WD Comfort aut',
  '2,0 MPI Exclusive 4WD Aut.',
  '2,2D 150hk Core 4x4 aut.',
  'E200 CDI ',
  '1,5 dCI DPF Acenta',
  '2,0 CDTi 110hk Edition Sportstourer',
  '1,6 Dynamique',
  '1,9 TDI DPF Ambiente Plus DSG',
  '2,5i Lineartronic Classic',
  '1,2 GA 4X4',
  'Land Cruiser 2,8 D-4D DLX aut',
  '2,0 TDI Comfortline 6-trinn DSG',
  'D4 2,4D Kinetic AWD aut'
];

let bmwCar2006Year5Ser = [
  {
    "id": 0,
    "questionId": null,
    "code": "20941",
    "message": "520d Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:410"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20940",
    "message": "520d ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:411"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20943",
    "message": "520d Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:412"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20942",
    "message": "520d Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:413"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20911",
    "message": "523i Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:414"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20910",
    "message": "523i ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:415"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20926",
    "message": "523i Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:416"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20925",
    "message": "523i Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:417"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20921",
    "message": "525d Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:418"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20920",
    "message": "525d ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:419"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20936",
    "message": "525d Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:420"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20935",
    "message": "525d Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:421"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20913",
    "message": "525i Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:422"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20912",
    "message": "525i ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:423"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20928",
    "message": "525i Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:424"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20927",
    "message": "525i Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:425"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20915",
    "message": "525 XI Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:426"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20914",
    "message": "525 XI ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:427"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20930",
    "message": "525 XI Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:428"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20929",
    "message": "525 XI Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:429"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20923",
    "message": "530d Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:430"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20922",
    "message": "530d ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:431"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20938",
    "message": "530d Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:432"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20937",
    "message": "530d Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:433"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20917",
    "message": "530i Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:434"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20916",
    "message": "530i ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:435"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20932",
    "message": "530i Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:436"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20931",
    "message": "530i Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:437"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20904",
    "message": "530 XD Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:438"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20900",
    "message": "530 XD ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:439"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20905",
    "message": "530 XD Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:440"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20901",
    "message": "530 XD Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:441"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20919",
    "message": "530 XI Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:442"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20918",
    "message": "530 XI ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:443"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20934",
    "message": "530 XI Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:444"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20933",
    "message": "530 XI Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:445"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20924",
    "message": "535d Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:446"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20939",
    "message": "535d Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:447"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20902",
    "message": "540i Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:448"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20903",
    "message": "540i ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:449"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20907",
    "message": "550i Automat ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:450"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20906",
    "message": "550i ( Sedan 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:451"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20909",
    "message": "550i Touring Automat ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:452"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "20908",
    "message": "550i Touring ( Stasjonsvogn 5 (E60-E61) )",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:453"
  }
];

module.exports = {
  removeBrackets,
  carVariantNames,
  bmwCar2006Year5Ser
};
