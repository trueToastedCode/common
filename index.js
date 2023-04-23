import jwt from 'jsonwebtoken'
import fs from 'fs'

import buildMakeToken from './token'

export default buildMakeToken({ fs, jwt })