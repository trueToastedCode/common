import fs from 'fs'
import path from 'path'

import buildMakeCredentials from './credentials'

function parseCredentials (data) {
  if (data == null) {
    throw new Error('No data provided')
  }
  const index = text.search(':')
  if (index === -1) {
    throw new Error('Seperator not found')
  }
  const username = data.substring(0, index).trim()
  if (username.length === 0) {
    throw new Error('Empty username')
  }
  const password = data.substring(index+1).trim()
  if (password.length === 0) {
    throw new Error('Empty password')
  }
  return { username, password }
}

export default buildMakeCredentials({ fs, path, parseCredentials })