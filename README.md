# simple-logger-pkg Simple Logger NPM Package
## Usage
#### install the package by, at console command window type: 
```
npm install simple-logger-pkg --save
```
#### You also need to create two variables in the application global scope:
```
global.DEBUG = true; // to enable or disable logging
global.LOGPATH = './logFiles/logfile.log'; // path and log file name 
```
#### Note: Make sure the directory path exist in your app for the log, if it does not, create the directory. the file will be created automatically in that directory.