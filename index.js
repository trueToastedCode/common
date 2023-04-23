import jwt from 'jsonwebtoken'

export default Object.freeze({
  sign: ({ expireAt, secret, data } = {}) => jwt.sign({
    data, exp: expireAt ? Math.floor(expireAt / 1000) : undefined
  }, secret),
  verify: ({ token, secret }) => jwt.verify(token, secret).data
})