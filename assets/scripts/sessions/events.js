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
  ui.mySessionsSuccess(mySessions(response))
  .catch(ui.problem);
});
};

// posts a new play to the server
const recordNewSession = function (event) {
  event.preventDefault();
  let data = {};
  data.session = getFormFields(event.target);
  // sets data to their types - possibly unneeded but paranoia
  // data.session.user_id = Math.floor(store.user.id);
  data.session.game_id = Math.floor(data.session.game_id);
  data.session.players = Math.floor(data.session.players);
  data.session.rating = Math.floor(data.session.rating);
  data.session.notes = data.session.notes.toString();
  //console.log(data);
  api.newSession(data)
  .then((response) =>{
    ui.newSessionResponse(response);
  })
  .catch(ui.problem);
  $('#create-session')[0].reset();
};

// updates a session with the server
const updateMySession = function (event) {
  event.preventDefault();
  let data = {};
  data.session = getFormFields(event.target);
  // sets up the original session data to fill nulls
  // console.log(data.session.id);
  // let oldData = api.getSession(data.session.id);
  // console.log(oldData);
  // if (!data.session.game_id) {
  //   data.session.game_id = oldData.session.game_id;
  // }
  api.updateSession(data, data.session.id)
  .then((response) => {
    ui.updated(response);
  })
  .catch(ui.destroyOrUpdateError);
  $('#update-session')[0].reset();
};

//destroys a session
const destroySession = function (event) {
  event.preventDefault();
  let id = getFormFields(event.target);
  api.deleteSession(id.id)
  .then(ui.destroyed)
  .catch(ui.destroyOrUpdateError);
  $('#delete-session')[0].reset();
};

const addHandlers = () => {
  $('#get-mine').on('submit', showMySessions);
  $('#create-session').on('submit', recordNewSession);
  $('#update-session').on('submit', updateMySession);
  $('#delete-session').on('submit', destroySession);
};

module.exports ={
  addHandlers
};
