import jwt from 'jsonwebtoken'

export default Object.freeze({
  sign: ({ expireAt, secret, data, algorithm = 'RS256' } = {}) => jwt.sign({
    data, exp: expireAt ? Math.floor(expireAt / 1000) : undefined
  }, secret, { algorithm }),
  verify: ({ token, secret }) => jwt.verify(token, secret).data
})