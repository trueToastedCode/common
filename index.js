import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

import buildMakeToken from './token'

export default buildMakeToken({ path, fs, jwt })