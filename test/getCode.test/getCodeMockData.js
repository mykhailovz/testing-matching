function getCode(value, options) {
  let result = options.filter(item => {
    return item.message === value;
  })[0];

  let code = result['code'];

  return code;
}

let carBrands = [
  {
    "id": 0,
    "questionId": null,
    "code": "1100",
    "message": "Alfa Romeo",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:18"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1170",
    "message": "Aston Martin",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:19"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1230",
    "message": "Audi",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:20"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1350",
    "message": "Bentley",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:21"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1400",
    "message": "BMW",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:22"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1500",
    "message": "Buick",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:23"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1550",
    "message": "Cadillac",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:24"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2650",
    "message": "Chevrolet",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:25"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1650",
    "message": "Chevrolet US",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:26"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1700",
    "message": "Chrysler",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:27"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1750",
    "message": "Citroën",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:28"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3290",
    "message": "Dacia",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:29"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3330",
    "message": "Daewoo",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:30"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2030",
    "message": "Daihatsu",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:31"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2250",
    "message": "Dodge",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:32"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "256",
    "message": "DS",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:33"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2400",
    "message": "Ferrari",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:34"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2450",
    "message": "Fiat",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:35"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "1199",
    "message": "Fisker",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:36"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2600",
    "message": "Ford",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:37"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3580",
    "message": "Galloper",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:38"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7740",
    "message": "Honda",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:39"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4030",
    "message": "Hummer",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:40"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3390",
    "message": "Hyundai",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:41"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4330",
    "message": "Infiniti",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:42"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2003",
    "message": "Infiniti",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:43"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3240",
    "message": "Isuzu",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:44"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3310",
    "message": "Iveco",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:45"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3400",
    "message": "Jaguar",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:46"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3510",
    "message": "Jeep",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:47"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3420",
    "message": "Kewet",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:48"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "7630",
    "message": "Kewet Buddy",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:49"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3450",
    "message": "Kia",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:50"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5610",
    "message": "Lada/VAZ",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:51"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3700",
    "message": "Lancia",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:52"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4953",
    "message": "Land Rover",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:53"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "9970",
    "message": "Lexus",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:54"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3920",
    "message": "Maserati",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:55"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3930",
    "message": "Mazda",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:56"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3900",
    "message": "Mercedes-Benz",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:57"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4000",
    "message": "MG",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:58"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3690",
    "message": "MINI",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:59"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4011",
    "message": "Mitsubishi",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:60"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4050",
    "message": "Morgan",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:61"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "2001",
    "message": "Nissan",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:62"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4350",
    "message": "Opel",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:63"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4500",
    "message": "Peugeot",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:64"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "8520",
    "message": "Piaggio",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:65"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4550",
    "message": "Plymouth",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:66"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4650",
    "message": "Pontiac",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:67"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4700",
    "message": "Porsche",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:68"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4800",
    "message": "Renault",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:69"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4900",
    "message": "Rolls-Royce",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:70"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4951",
    "message": "Rover",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:71"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5090",
    "message": "Seat",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:72"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5150",
    "message": "Skoda",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:73"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3590",
    "message": "Smart",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:74"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3440",
    "message": "SsangYong",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:75"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3440",
    "message": "Ssangyong",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:76"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5260",
    "message": "Subaru",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:77"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "8380",
    "message": "Suzuki",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:78"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5000",
    "message": "Saab",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:79"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "4360",
    "message": "Tesla",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:80"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "3560",
    "message": "Think",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:81"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5480",
    "message": "Toyota",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:82"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5750",
    "message": "Volkswagen",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:83"
  },
  {
    "id": 0,
    "questionId": null,
    "code": "5800",
    "message": "Volvo",
    "order": null,
    "questionFieldName": null,
    "questionLob": null,
    "$$hashKey": "object:84"
  }
];

module.exports = {
  getCode,
  carBrands
};
