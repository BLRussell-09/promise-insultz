const ajax = require('./ajax');
const domBuilder = require('./domBuilder');

const insultMe = () =>
{
  const descData = ajax.descriptorsJson().then((descripts) =>
  {
    ajax.nounJson().then((nouns) =>
    {
      $('#insulter').html(domBuilder(nouns, descripts));
    });
  });
  return descData;
};

module.exports = insultMe;
