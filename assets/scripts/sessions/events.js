'use strict';

// const getFormFields = require(`../../../lib/get-form-fields`);
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
// temporary thing, should do with handlebars
  api.getSessions()
  .then((response) => {
  ui.mySessionsSuccess(mySessions(response));
});
};

const addHandlers = () => {
  $('#get-mine').on('submit', showMySessions);
};

module.exports ={
  addHandlers
};
