global.beeplay = module.exports = function (option) {
  'use strict';

  var beeplay               = require('./modules/main');
  beeplay.prototype.isArray = require('./modules/isArray');
  beeplay.prototype.watch   = require('./modules/watch');
  beeplay.prototype.nn      = require('./modules/nn');
  beeplay.prototype.pd      = require('./modules/pd');
  beeplay.prototype.pn      = require('./modules/pn');
  beeplay.prototype.play    = require('./modules/play');
  beeplay.prototype.start   = require('./modules/start');
  beeplay.prototype.put     = require('./modules/put');
  beeplay.prototype.toJSON  = require('./modules/toJSON');

  return new beeplay(option);
};
