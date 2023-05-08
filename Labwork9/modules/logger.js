//1. Напишіть простий модуль логування, який підтримує логування повідомлень, для яких
//рівень логування перевищує заданий поріг. Експортуйте функцію log, константи рівнів
//логування та функцію завдання рівня логування.

const LogLevel = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5,
};

let currLogLevel = LogLevel.debug;

function setLogLevel(logLevel) {
  currLogLevel = logLevel;
}

function log(level, message) {
  if (level < currLogLevel) return;

  const timestamp = new Date().toISOString();
  console.log(`${timestamp} [${level}] ${message}`);
}

module.exports = {
  LogLevel,
  setLogLevel,
  log,
}; 

//2. Повторіть попереднє завдання але тепер експортуйте весь класс по замовчуванню.
  
class Logger {
  static LogLevel = {
    error: 0,
    warn: 1,
    info: 2,
    verbose: 3,
    debug: 4,
    silly: 5,
  };

  currentLogLevel = Logger.LogLevel.warn;

  static setLogLevel(logLevel) {
    Logger.currentLogLevel = logLevel;
  }

  static log(level, message) {
    if (level < Logger.currentLogLevel) return;

    const timestamp = new Date().toISOString();
    console.log(`${timestamp} [${level}] ${message}`);
  }
}

export default Logger;