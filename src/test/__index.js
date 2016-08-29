const assert = require('assert');
const logger = require('../index.js');

describe('test utility.debug()', () => {
  global.DEBUG = true;
  const message = 'some message';
  it('should log as information to console', () => {
    assert.equal(logger.debug(message, 0), message + ' printed as information');
  });
  it('should log as warning to console', () => {
   assert.equal(logger.debug(message, 1), message + ' printed as warning');
  });
  it('should log as error to console', () => {
   assert.equal(logger.debug(message, 2), message + ' printed as error');
  });
});
