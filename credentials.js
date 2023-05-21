export default function buildMakeCredentials ({ fs, path, parseCredentials }) {
  return function makeCredentials ({ credentialsPath = '../../../credentials.txt' } = {}) {
    const data = fs.readFileSync(
      path.resolve(__dirname, credentialsPath)).toString()
    return parseCredentials(data)
  }
}