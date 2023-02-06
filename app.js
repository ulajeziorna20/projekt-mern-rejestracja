// importujemy ustawienia
const config = require("./config")

const express = require("express")
const cors = require("cors")

// tworzymy app któro bedzie uzywało cors'a
const app = express()
app.use(express.json())
// dodajemy middleware, który pozwala parsowac dane które przychodzą w formacie json;'a
app.use(cors())


// importujemy routing eventów, nawiasy ( na koncu oznaczają uruchomienie bo to co nam przyjdzie to funkcja)
const eventsRoutes = require('./app/routes/EventsRoutes')()

app.use('/events', eventsRoutes)












// uruchamiamy serwer par port, funkja
app.listen(config.app.port, () => {
  console.log("express server is up! Happy hacking")
})
