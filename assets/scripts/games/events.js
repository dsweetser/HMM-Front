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
    console.log(response.game.name)
    ui.gameShow(response);
  })
  .catch(ui.failure);
};



const addHandlers = () => {
  $('#showGame').on('submit', showGame);
};

module.exports = {
  addHandlers,
};
