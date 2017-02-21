'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signUpYes = () => {
  $('#sign-up').append(
  '<div class="row"><div class="col-xs-10  alert larger" id="temp">New User Created!</div></div>');
  $('#sign-up')[0].reset();
};

const signUpNo = () => {
  if ($('.col-xs-10')) {
    $('.col-xs-10').remove();
  }
  $('#sign-up').append(
  '<div class="row"><div class="col-xs-10 red alert" id="temp"><h3>Username already taken OR mismatched password</h3></div></div>');
};

const changePasswordYes = () =>{
  $('#change-password').append(
  '<div class="row"><div class="col-xs-10 alert larger" id="temp">Password Successfully Changed!</div></div>');
    $('#change-password')[0].reset();
};

const changePasswordNo = () =>{
  if ($('.col-xs-10')) {
    $('.col-xs-10').remove();
  }
  $('#change-password').append(
  '<div class="row"><div class="col-xs-10 red alert" id="temp"><h3>Bad Password, Please Retry</h3></div></div>');
};

const signInNo = () =>{
  $('#sign-in').append(
    '<div class="row"><div class="col-xs-10 red alert" id="temp"><h3>Invalid Username or Password</h3></div></div>');
};

const hideAll = function() {
  $('#showGame').hide();
  $('#getGames').hide();
  $('#createGame').hide();
  $('#get-mine').hide();
  $('#create-session').hide();
  $('#update-session').hide();
  $('#delete-session').hide();
};

const signInYes = () => {
  $('.login').hide();
  $('.userstuff').show();
  hideAll();
};

module.exports = {
  failure,
  success,
  signUpYes,
  signUpNo,
  changePasswordYes,
  changePasswordNo,
  signInNo,
  signInYes
};
