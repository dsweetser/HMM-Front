'use strict';

const userSessions = require ('../templates/user-sessions.handlebars');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const mySessionsSuccess = (data) => {
  $('#results').empty();
  let sessionsList = userSessions({ sessions: data });
  console.log(sessionsList);
  $('#results').append(sessionsList);
};

module.exports = {
  success,
  failure,
  mySessionsSuccess
};
