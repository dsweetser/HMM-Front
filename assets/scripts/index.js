'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events');
const sessionEvents = require('./sessions/events');
const gameEvents = require('./games/events');
const uiNav = require('./ui/events');



$(() => {
  setAPIOrigin(location, config);
  $('.userstuff').hide();
  authEvents.addHandlers();
  sessionEvents.addHandlers();
  gameEvents.addHandlers();
  uiNav.addHandlers();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
