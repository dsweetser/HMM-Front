'use strict';

const userSessions = require ('../templates/user-sessions.handlebars');
const newSession = require ('../templates/new-session.handlebars');
const updatedSession = require ('../templates/update-session.handlebars');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const mySessionsSuccess = (data) => {
  $('#results').empty();
  console.log(data);
  if (data.length === 0) {
    $('#results').append('<h3>Sadly, you do not have any sessions yet!</h3>');
  } else {
  let sessionsList = userSessions({ sessions: data });
  $('#results').append(sessionsList);
}
};

const problem = () => {
  $('#results').empty();
  $('#results').append('<h3 class="red">Oh dear, something has gone awry...</h3>');
};

const newSessionResponse = (data) => {
  $('#results').empty();
  $('#results').append(newSession(data.session));
};

const destroyed = function() {
  $('#results').empty();
  $('#results').append("<h3>Session Successfully Deleted</h3>");
};

const updated = function (data) {
  $('#results').empty();
  console.log(data.session);
  $('#results').append(updatedSession(data.session));
};

const destroyOrUpdateError = function() {
  $('#results').empty();
  $('#results').append('<h3 class="red">Something has gone wrong - are you sure this is your session?</h3>');
};

module.exports = {
  success,
  failure,
  mySessionsSuccess,
  problem,
  newSessionResponse,
  destroyed,
  updated,
  destroyOrUpdateError,
};
