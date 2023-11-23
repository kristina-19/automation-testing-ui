const { createLogger, format, transports } = require('winston');
const winston = require('winston');


module.exports = createLogger({
  format: winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss'}),
  transports: [
    new transports.File({
      maxsize: 512000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/log-api.log`  
    }),
    new transports.Console({
      level: 'info', 
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
      )
    })
  ]
});

//module.exports = new Logger();