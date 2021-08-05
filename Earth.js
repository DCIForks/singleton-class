class Earth {
  constructor() {
    this.data = [
      {
        name: "Germany",
        population: 83190556,
        area: 357022,
        hdi: 0.947,
        currency: "Euro €"
      },
      {
        name: "Spain",
        population: 47450795,
        area: 505990,
        hdi: 0.904,
        currency: "Euro €"
      },
      {
        name: "Russia",
        population: 146171015,
        area: 17098246,
        hdi: 0.824,
        currency: "Ruble ₽"
      },
      {
        name: "India",
        population: 1352642280,
        area: 3287263,
        hdi: 0.645,
        currency: "Rupee ₹"
      }
    ];

    this.countryNames = this.data.map((countryData) => {
      return countryData.name;
    });
    this.dataFields = Object.keys(this.data[0]);

    // console.log("this.countryNames:", this.countryNames);
    // console.log("this.dataFields:", this.dataFields);
  }

  getData(countryName, field) {
    if (this.countryNames.indexOf(countryName) < 0) {
      return [...this.data];
    }

    let requestedData = this.data.find((countryData) => {
      return (countryData.name = countryName);
    });

    if (this.dataFields.indexOf(field) < 0) {
      return { ...requestedData };
    }

    requestedData = requestedData[field];

    return requestedData;
  }
}

module.exports = new Earth();
