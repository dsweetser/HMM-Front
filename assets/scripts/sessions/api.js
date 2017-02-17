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

module.exports = {
  getSessions
};
