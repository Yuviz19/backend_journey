const fs = require('fs');
const os = require('os');

const EventEmmiter = require('events');

class Logger extends EventEmmiter{
  log(message) {
    this.emit('message', { message });
  }
}

const logger = new Logger();
const logFile = './eventlog.txt';

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}`
  fs.appendFileSync(logFile, logMessage);
}

logger.on('message', logFile);
