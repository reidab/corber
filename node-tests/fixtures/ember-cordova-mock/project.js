'use strict';

var path            = require('path');
var MockUI          = require('ember-cli/tests/helpers/mock-ui');

module.exports = {
  env: 'development',
  id: 'ember-cordova-mock',
  name: 'ember-cordova-mock',

  project: {
    root: path.resolve(__dirname, '..', '..', 'fixtures', 'ember-cordova-mock'),
    name: function() { return 'ember-cordova-mock' },
    isEmberCLIProject: function() { return true; }
  },

  config: function() {},

  ui: new MockUI()
}
