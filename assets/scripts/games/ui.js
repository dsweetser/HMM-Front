'use strict';

const gameDisplay = require ('../templates/game-display.handlebars');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const gameShow = (response) => {
  console.log(response);
  $('#results').empty();
  $('#results').append(gameDisplay(response));
};

module.exports = {
  failure,
  success,
  gameShow,
};
