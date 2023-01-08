const express = require("express")
const router = express.Router()

module.exports = () => {
  // GET events .get(sciezka)
  router.get("./", (req, res, next) => {
    res.json({
      events: [
        {
          name: "Krystian Dziopa",
          ecent: { key: "frontend", val: "Front End" },
          city: {key: 'Warsow', val: 'Warszawa'}
        },
        {
          name: "Łukasz Badocha",
          ecent: { key: "backend", val: "Back End" },
          city: {key: 'cracow', val: 'Kraków'}
        },
      ],
    })
  })

  // musimy jeszcze zwrócić router
  return router
}
