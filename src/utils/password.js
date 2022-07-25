const bcrypt = require('bcrypt')

async function passCript(pwd) {
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)
    return password
}

module.exports = {
    passCript
}