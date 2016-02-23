winston = require 'winston'
moment = require 'moment'
winston.emitErrs = true

logger = new (winston.Logger)(
  transports: [
    new (winston.transports.File)(
      level: 'debug'
      filename: './logs/' + moment(new Date).format('DD-MM-YYYY') + '.log'
      handleExceptions: true
      json: true
      maxsize: 5242880
      maxFiles: 5
      colorize: false)
    new (winston.transports.Console)(
      level: 'debug'
      handleExceptions: true
      json: false
      colorize: true)
  ]
  exitOnError: false)

module.exports = logger

module.exports.stream = write: (message, encoding) ->
  logger.info message
  return
