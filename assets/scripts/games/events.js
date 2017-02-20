'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const ui = require('./ui');
const api = require('./api');


const showGame = function(event) {
  event.preventDefault();
  $('#results').empty();
  let data = getFormFields(event.target);
  console.log(data.id);
  api.getGame(data.id)
  .then((response) => {
    $('#results').append('<h3>' + response.game.name + '</h3>');
  //  ui.gameShow(response);
  })
  .catch(ui.problem);
};

const showGames = function (event) {
  event.preventDefault();
  api.getGames()
  .then((response) => {
    ui.gameShow(response);
  })
  .catch(ui.problem);
//  ui.gameShow(api.getGames());
};



const addHandlers = () => {
  $('#showGame').on('submit', showGame);
  $('#getGames').on('submit', showGames);
};

module.exports = {
  addHandlers,
};
