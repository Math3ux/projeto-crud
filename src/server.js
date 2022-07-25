const express = require('express')
const path = require('path')
const db = require('./database')

const app = express()

// Conectando com o banco de dados do MongoDB
db.connect()

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita o server para receber dados via post de formulários
app.use(express.urlencoded({ extended: true }))

// rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

// erro 404
app.use((req, res) => { // middleware
    res.send('Página não encontrada!')
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Connected in ${port}!`)
})