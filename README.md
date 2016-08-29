# simple-logger-pkg Simple Logger NPM Package
## Usage
#### install the package by, at console command window type: 
```
npm install simple-logger-pkg --save
```
#### You also need to create two variables in the application global scope:
```
global.DEBUG = true; // to enable or disable logging
```
#### The log message has three levels of messages: information, warnings, and errors. you can select level of messages by passing it on the call. ex:
```
// 0 for information (blue)
// 1 for warning (yellow)
// 2 for error (red)
const logger = require("simple-logger-pkg");
logger.debug("your message", 0); 
```