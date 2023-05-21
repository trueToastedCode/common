export default function buildMakeCredentials ({ fs, path, parseCredentials }) {
  return function makeCredentials ({ credentialsPath = '../../../credentials.txt' } = {}) {
    const data = fs.readFileSync(
      path.resolve(__dirname, credentialsPath))
    const credentials = parseCredentials(data)
    return Object.freeze({
      getUsername: () => credentials.username,
      getPassword: () => credentials.password
    })
  }
}