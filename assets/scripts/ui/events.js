'use strict';

const showGame = function {

};



const addHandlers = function () {
  $('#show_a_game').on('submit', showGame);
};

module.exports = {
  addHandlers,
};
