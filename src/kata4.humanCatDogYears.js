const humanCatDogYears = (number) => {

  let catYears;
  let dogYears;
  
    if (number === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (number === 2) {
      catYears = 24;
      dogYears = 24;
    } else {
      catYears = 24 + (number - 2) * 4;
      dogYears = 24 + (number - 2) * 5;
    }
    return [number, catYears, dogYears];

  };  

module.exports = humanCatDogYears;
