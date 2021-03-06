'use strict';

var expect          = require('../../helpers/expect');
var HookTask        = require('../../../lib/tasks/run-hook');
var mockProject     = require('../../fixtures/ember-cordova-mock/project');

describe('Run Hook Task', function() {
  it('runs a hook at the provided path', function() {
    var hookTask = new HookTask(mockProject);
    expect(hookTask.run('hook')).to.be.fulfilled;
  });

  it('runs a hook at the provided path that has an error', function() {
    var hookTask = new HookTask(mockProject);
    expect(hookTask.run('hook-with-error')).to.be.rejected;
  });

  it('is rejected if the hook does not exist', function() {
    var hookTask = new HookTask(mockProject);
    expect(hookTask.run('invalid')).to.be.rejected;
  });
});
