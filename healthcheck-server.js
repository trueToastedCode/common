export default function makeHealthCheckServer ({ http }) {
  return async function healthCheckServer ({ getIsHealthy, port = 3000 }) {
    http.createServer(function (req, res) {
      if (req.url === '/healthcheck') {
        res.writeHead(getIsHealthy() ? 200 : 500)
      } else {
        res.writeHead(404)
      }
      res.end()
    }).listen(port)
  }
}