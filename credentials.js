export default function buildMakeCredentials ({ fs, path, parseCredentials }) {
  return function makeCredentials ({ credentialsPath = '../../../credentials.txt' } = {}) {
    const data = fs.readFileSync(
      path.resolve(__dirname, credentialsPath)).toString()
    const credentials = parseCredentials(data)
    return Object.freeze({
      username: credentials.username,
      password: credentials.password
    })
  }
}