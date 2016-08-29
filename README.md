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
#### Two funcitons:
1. debug() to produce a log message on the console, The log messages will contain three levels of messages: information, warnings, and errors. you can select level of messages by passing it on the call. ex:
2. versionUp() to increase a Semantic version based on the input previous version and the version type (Major, Minor, Patch)
```
// logs type:
// 0 for information (blue)
// 1 for warning (yellow)
// 2 for error (red)

// versions type:
// Major, Minor, Patch

const utility = require("simple-logger-pkg");
utility.debug("your message", 0); 
var newVersion = utility.versionUp("1.0.2", "Major") //will return "2.0.2"
```