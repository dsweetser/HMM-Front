'use strict';

const config = require('../config');
const store = require('../store');

const getSessions = function () {
  return $.ajax({
    url: `${config.apiOrigin}/sessions/`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const newSession = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/sessions/`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
  });
};

module.exports = {
  getSessions,
  newSession
};
