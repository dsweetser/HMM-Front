'use strict';

const config = require('../config');
const store = require('../store');

const getGames = function () {
  return $.ajax({
    url: `${config.apiOrigin}/games/`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const getGame = function (id) {
  return $.ajax({
    url: `${config.apiOrigin}/games/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const newGame = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/games/`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
  });
};

module.exports = {
  getGame,
  getGames,
  newGame,
};
