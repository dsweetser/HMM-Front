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

const showGame = function () {
  hideAll();
  $('#showGame').toggle();
};

const getGames = function() {
  hideAll();
  $('#getGames').toggle();
};


const addHandlers = () => {
  $('#show_a_game').on('click', showGame);
  $('#get_games').on('click', getGames);
};

module.exports ={
  addHandlers
};
