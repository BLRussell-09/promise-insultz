const nounJson = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/nouns.json').done((data) =>
    {
      resolve(data.nouns);
    }).fail((iFail) =>
    {
      reject('I failed', iFail);
    });
  });
};

const descriptorsJson = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.get('./db/descriptors.json').done((data) =>
    {
      resolve(data.descriptors);
    }).fail((iFail) =>
    {
      reject('I failed', iFail);
    });
  });
};

module.exports =
{
  nounJson,
  descriptorsJson,
};
