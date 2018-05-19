const insultGen = require('./insultGen');

const initButtons = () =>
{
  $('button').click(insultGen);
};

module.exports = initButtons;
