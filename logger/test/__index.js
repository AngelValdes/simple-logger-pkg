//const assert = require('assert');
//const expect = require('chai').expect;
const logger = require('../index.js');

global.DEBUG = true;

describe('test logger', () => { //to be implemented
    it('test debug function', () => {
        logger.debug("test message", 0);
        //assert.equal();
        //expect('testValue').toBe('testValue');
    });
    it('test file creation', () => {
        //assert.equal();
        //expect('testValue').toBe('testValue');
    });
    it('test color selection by level', () => {
        //assert.equal();
        //expect('testValue').toBe('testValue');
    });
});