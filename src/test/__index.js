const assert = require('assert');
const utility = require('../index');

describe('test utility.debug()', () => {
    global.DEBUG = true;
    const message = "some message";
    it('should log as information to console', () => {      
         assert.equal(utility.debug(message,0), message + ' printed as information');
    });
    it('should log as warning to console', () => {      
         assert.equal(utility.debug(message,1), message + ' printed as warning');
    });
    it('should log as error to console', () => {      
         assert.equal(utility.debug(message,2), message + ' printed as error');
    });
});
