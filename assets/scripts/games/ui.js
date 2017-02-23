'use strict';

const gameDisplay = require ('../templates/game-display.handlebars');
const newGame = require ('../templates/new-game.handlebars');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const problem = () => {
  $('#results').empty();
  $('#results').append('<h3 class="red">Oh dear, something has gone awry...');
};

const gameShow = (response) => {
  //console.log(response);
  $('#results').empty();
  $('#results').append(newGame(response));
};

const gamesShow = (response) => {
  ..console.log(response);
  $('#results').empty();
  $('#results').append(gameDisplay(response));
};

module.exports = {
  failure,
  success,
  gameShow,
  problem,
  gamesShow
};
