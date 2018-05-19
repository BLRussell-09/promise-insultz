function randomNum (min, max) {
  const myNumber =  Math.random() * (max - min) + min;
  return Math.round(myNumber);
}

const domBuilder = (nounArr, descArr) =>
{
  const biteMe = randomNum(0, 111);
  const biteMeHarder = randomNum(0, 111);
  const biteMyAss = randomNum(0,39);
  let domString = '';
  domString += `<h3>You are a ${descArr[biteMe].text} ${descArr[biteMeHarder].text} ${nounArr[biteMyAss].text}, and you smell like arthritis</h3>`;
  return domString;
};

module.exports = domBuilder;
