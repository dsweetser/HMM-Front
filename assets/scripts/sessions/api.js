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

const getSession = function (id) {
  return $.ajax({
    url: `${config.apiOrigin}/sessions/${id}`,
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

const updateSession = function (data, id) {
  return $.ajax({
    url: `${config.apiOrigin}/sessions/${Math.floor(id)}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  });
};

const deleteSession = function (id) {
  return $.ajax({
    url: `${config.apiOrigin}/sessions/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  getSessions,
  newSession,
  updateSession,
  getSession,
  deleteSession,
};
