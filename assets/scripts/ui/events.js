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

const getMySessions = function() {
  hideAll();
  $('#get-mine').toggle();
};

const createSession = function() {
  hideAll();
  $('#create-session').toggle();
};

const updateSession = function() {
  hideAll();
  $('#update-session').toggle();
};

const deleteSession = function() {
  hideAll();
  $('#delete-session').toggle();
};


const addHandlers = () => {
  $('#show_a_game').on('click', showGame);
  $('#get_games').on('click', getGames);
  $('#create_game').on('click', createGame);
  $('#get_mine').on('click', getMySessions);
  $('#create_session').on('click', createSession);
  $('#update_session').on('click', updateSession);
  $('#delete_session').on('click', deleteSession);
};

module.exports ={
  addHandlers
};
