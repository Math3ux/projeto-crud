const CustomersModel = require('../models/customers')
const { passCript } = require('../utils/password')

async function add(req, res) {
    const { name, age, email, password } = req.body

    const passwordCripto = await passCript(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCripto
    })

    register.save()
    res.redirect('/register')
}

module.exports = {
    add
}