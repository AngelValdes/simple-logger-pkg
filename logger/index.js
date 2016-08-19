/* eslint no-console: 0 */ // requested functionality by instructor in this module
// logger utility module
//----------------------------------------------------------------------
// use file system
const fs = require('fs');

const path = global.LOGPATH; // './logs/logfile.log';
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

// check for log file existance, if not exists, initialize it with date
fs.stat(path, (err) => { // I know this parameter is not used, but I left it there as reminder
    if (err === null) {
        console.log('The log file already exists, logger initialized!');
    } else {
        // create log file with date and time
        fs.writeFile(path, 'Log file Initialized on ' + datetime,
            (erro) => {
                if (erro) {
                    return console.log(erro);
                }
                return console.log('The log file was created, logger initialized!');
            }
        );
    }
});
exports.debug = (message, level) => {
    if (global.DEBUG === true) {
        // log to console and write to file
        // display message on console in color
        switch (levels[level].color) {
            case 'blue':
                console.log(colors.blue.bgWhite(message));
                break;
            case 'yellow':
                console.log(colors.yellow.bgWhite(message));
                break;
            case 'red':
                console.log(colors.red.bgWhite(message));
                break;
            default:
                console.log(colors.blue.bgWhite(message));
        }
        // append message to logfile
        fs.appendFile(path, '\n - at: ' + datetime.toLocaleTimeString() + ' ' +
            levels[level].type + '(' + levels[level].color + '): ' + message, (err) => {
                if (err) {
                    console.log('Error appending to log: ' + err);// if error appending, log to console
                }
            });
    }
};