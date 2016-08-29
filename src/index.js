/* eslint no-console: 0 */ // requested functionality by instructor in this module
// utility module
//----------------------------------------------------------------------
// date time functionality
const datetime = new Date();
// log levels
const levels = [
    { level: 0, type: 'information', color: 'blue' },
    { level: 1, type: 'warning', color: 'yellow' },
    { level: 2, type: 'error', color: 'red' },
];
// console colors
const colors = require('colors');

module.exports.debug = (message, level) => {
    var result = message + ' not printed';
    if (global.DEBUG === true) {
        // write to console message in color
        switch (levels[level].color) {
            case 'blue':
                console.log(colors.blue.bgWhite(message));
                result = message + ' printed as ' + levels[level].type;
                break;
            case 'yellow':
                console.log(colors.yellow.bgWhite(message));
                result = message + ' printed as ' + levels[level].type;
                break;
            case 'red':
                console.log(colors.red.bgWhite(message));
                result = message + ' printed as ' + levels[level].type;
                break;
            default:
                break;
        }       
    }
    return result;
};
