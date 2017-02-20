'use strict';

const userSessions = require ('../templates/user-sessions.handlebars');
const newSession = require ('../templates/new-session.handlebars');

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

const problem = () => {
  $('#results').empty();
  $('#results').append('=<h3 class="red">Oh dear, something has gone awry...');
};

const newSessionResponse = (data) => {
  $('#results').empty();
  console.log(data.session);
  $('#results').append(newSession(data.session));
};

module.exports = {
  success,
  failure,
  mySessionsSuccess,
  problem,
  newSessionResponse,
};
