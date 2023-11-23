const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//config. handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// os arquivos publicos ficarao na pasta "public"
app.use(express.static("public"))

app.get('/', (requisicao, resposta) => {
    // resposta.send("hello world!!") [teste]
    resposta.render('home')
})

app.listen(3000, () => {
    console.log("running server (door 3000)")
})