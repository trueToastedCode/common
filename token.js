export default function buildMakeToken ({ jwt }) {
  return function makeToken ({ keyPath = '../../secret.key', algorithm = 'RS256' } = {}) {
    const secret = fs.readFileSync(keyPath)
    return Object.freeze({
      sign,
      verify
    })
    function sign ({ expireAt, data } = {}) {
      return jwt.sign({
        data,
        exp: expireAt ? Math.floor(expireAt / 1000) : undefined
      }, secret, { algorithm })
    }
    function verify (token) {
      return jwt.verify(token, secret).data
    }
  }
}