import http from 'http'

import makeHealthCheckServer from './healthcheck-server'

export default makeHealthCheckServer({ http })