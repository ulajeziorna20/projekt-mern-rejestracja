// 1. importujemy ustawienia
const config = require("./config")

const express = require("express")
const cors = require("cors")

//8.  pobieramy bibliotekę mongoosa po instalacji
const mongoose = require("mongoose")

// 9. stworzymy mongo url do naszego połączenia. Wrzucimy tu sobie dane z ustawien bd z configa
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`

// 10. probujemy się  połączyc
mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log("mongo db is conneted")
  })
  .catch((err) => {
    throw err
  })

// 2. tworzymy app któro bedzie uzywało cors'a
const app = express()
app.use(express.json())
// dodajemy middleware, który pozwala parsowac dane które przychodzą w formacie json;'a
app.use(cors())

// 3. importujemy routing eventów, nawiasy ( na koncu oznaczają uruchomienie bo to co nam przyjdzie to funkcja)
const eventsRoutes = require("./app/routes/EventsRoutes")()

app.use("/events", eventsRoutes)

// 4. uruchamiamy serwer par port, funkja
app.listen(config.app.port, () => {
  console.log("express server is up! Happy hacking")
})
