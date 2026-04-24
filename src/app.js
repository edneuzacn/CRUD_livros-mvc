const express = require("express")
const userController = require("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("Temos porém este tesouro em vasos de barro, para que a excelencia do poder seja de Deus e não de nós IICo 4:7")
})

app.get("/users", userController.getAllUsers) 

app.post("/users", (req, res) => {
    res.send("Estamos testando!")
})

module.exports = app

