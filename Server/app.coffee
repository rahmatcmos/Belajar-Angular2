http = require 'http'
express = require 'express'
path = require 'path'
favicon = require 'serve-favicon'
morgan = require 'morgan'
methodOverride = require 'method-override'
bodyParser = require 'body-parser'
errorhandler = require 'errorhandler'
mongoose = require 'mongoose'
cookieParser = require 'cookie-parser'
cors = require 'cors'
Logger = require './utils/Logger'
BarangRoute = require './routes/BarangRoute'
app = express()

app.set 'port', process.env.PORT || 3000

app.use cookieParser()
app.use cors()
app.use favicon(__dirname + '/public/favicon.ico')
app.use morgan('combined',
  stream: Logger.stream
)
app.use methodOverride()
app.use bodyParser.urlencoded(
  extended: true
)
app.use express.static(path.join(__dirname, 'public'))
app.use '/api', BarangRoute

mongoose.connect 'mongodb://127.0.0.1/belajar-angular2', (err, res) ->
  if err
    Logger.debug 'koneksi mongodb gagal'
  else
    Logger.debug 'koneksi mongodb berhasil'

if 'development' == app.get 'env'
  app.use errorhandler()

server = http.createServer app
server.listen app.get('port'), ->
  Logger.debug 'Server jalan pada port ' + app.get('port')
