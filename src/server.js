const express = require('express')
const path = require('path')


const db = require('./database')
const routes = require('./routes')


const app = express()

// Conectando com o banco de dados do MongoDB
db.connect()


/*
Exemplo de um registro no banco de dados
const register = new Model({
    name: "Matheus",
    age: 17,
    email: "matheusleidow@gmail.com",
    password: '123456'
})

register.save()*/

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita o server para receber dados via post de formulários
app.use(express.urlencoded({ extended: true }))

//definindo as rotas
app.use('/', routes)

// erro 404
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})

// pegando a porta utilizada pelo servidor ou utilizar a parta 8080 mesmo
const port = process.env.PORT || 8080

// 'ouvindo' tudo que acontece nesta porta
app.listen(port, () => {
    console.log(`Connected in ${port}!`)
})

