'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const ui = require('./ui');
const api = require('./api');

// const ui = require('./ui');

const store = require('../store');

const onSignUp = function (event) {
  event.preventDefault();
  $('.alert').remove();
  let data = getFormFields(event.target);
  console.log(data);
  api.signUp(data)
    .then(ui.signUpYes)
    .catch(ui.signUpNo);
  $('#sign-up')[0].reset();
};

const onSignIn = function (event) {
  event.preventDefault();
  if ($('.alert')) {
    $('.alert').remove();
  }

  let data = getFormFields(event.target);
  api.signIn(data)
    .then((response) => {
      store.user = response.user;

 })
    .then(ui.signInYes)
    .catch(ui.signInNo);
    $('#sign-in')[0].reset();
    $('#results').append("<p>Welcome to How Many Meeples! If you haven't used the site before, you can use the links to the left to access our functionality. You can view and add games to our collection, record your play sessions, and look up the sessions that you've played.</p>");
};

const onChangePassword = function (event) {
  event.preventDefault();
  if ($('.alert')) {
    $('.alert').remove();
  }

  let data = getFormFields(event.target);
  $('#change-password')[0].reset();
  api.changePassword(data)
  .then(ui.changePasswordYes)
  .catch(ui.changePasswordNo);


  // .then(ui.success)
  // .catch(ui.failure);

};

const onSignOut = function (event) {
  event.preventDefault();
  $('.login').show();
  $('.userstuff').hide();
  if ($('.alert')) {
    $('.alert').remove();
  }
  $('#results').empty();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    });

};
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
