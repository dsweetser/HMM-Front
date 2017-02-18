'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const ui = require('./ui');
const api = require('./api');
const store = require('../store');

const showMySessions = function (event) {
  event.preventDefault();

  const mySessions = function (response) {
    let sessions =[];

    // separates all games the user has played from total games received
    // this should be a temporary fix - there must be a better way on the back end
    for (let i = 0, max = response.sessions.length; i < max; i++) {
      if (store.user.id === response.sessions[i].user) {
        sessions.push(response.sessions[i]);
      }
  }
  return sessions;
};
  api.getSessions()
  .then((response) => {
  ui.mySessionsSuccess(mySessions(response));
});
};

// patches a new play to the server
const recordNewSession = function (event) {
  event.preventDefault();
  let data = {};
  data.session = getFormFields(event.target);
  data.session.user_id = Math.floor(store.user.id);
  data.session.game_id = Math.floor(data.session.game_id);
  data.session.players = Math.floor(data.session.players);
  data.session.rating = Math.floor(data.session.rating);
  console.log(data);
  api.newSession(data)
  .then(ui.success)
  .catch(ui.failure);
};

const addHandlers = () => {
  $('#get-mine').on('submit', showMySessions);
  $('#create-sessions').on('submit', recordNewSession);
};

module.exports ={
  addHandlers
};
