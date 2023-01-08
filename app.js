// importujemy ustawienia
const config = require("./config")

const express = require("express")
const cors = require("cors")

// tworzymy app któro bedzie uzywało cors'a
const app = express()
app.use(cors())

// uruchamiamy serwer par port, funkja
app.listen(config.app.port, () => {
  console.log("express server is up! Happy hacking")
})
