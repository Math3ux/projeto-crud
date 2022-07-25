const mongoose = require('mongoose')

// schema = modelo básico da tabela no banco de dados
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

// Modelo de informações do banco de dados
const Model = mongoose.model('customers', schema)

module.exports = Model