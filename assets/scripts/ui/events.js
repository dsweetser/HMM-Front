'use strict';

const hideAll = function() {
  $('#showGame').hide();
  $('#getGames').hide();
  $('#createGame').hide();
  $('#get-mine').hide();
  $('#create-session').hide();
  $('#update-session').hide();
  $('#delete-session').hide();
};
// the following bits unhide the bits of the UI when the corresponding menu
// button is clicked
const showGame = function () {
  hideAll();
  $('#showGame').toggle();
};

const getGames = function() {
  hideAll();
  $('#getGames').toggle();
};

const createGame = function() {
  hideAll();
  $('#createGame').toggle();
};


const addHandlers = () => {
  $('#show_a_game').on('click', showGame);
  $('#get_games').on('click', getGames);
  $('#create_game').on('click', createGame);
};

module.exports ={
  addHandlers
};