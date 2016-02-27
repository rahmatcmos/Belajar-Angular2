var proxyMiddleware = require('http-proxy-middleware');
var historyFallback = require('connect-history-api-fallback');
var log = require('connect-logger');

var proxy = proxyMiddleware('/api', {
  target: 'http://localhost:3000/'
});

module.exports = {
  injectChanges: false,
  files: ['./**/*.{html,htm,css,js}'],
  server: {
    baseDir: './',
    middleware: [
      proxy,
      log({
        format: '%date %status %method %url'
      }),
      historyFallback({
        "index": '/index.html'
      })
    ]
  }
};
