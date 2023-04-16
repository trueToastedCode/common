import bcrypt from 'bcrypt'

export default Object.freeze({
    compareSync: bcrypt.compareSync,
    hashSync: (plain) => bcrypt.hashSync(plain, 10)
})