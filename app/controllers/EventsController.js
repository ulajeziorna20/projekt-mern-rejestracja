// 12. pobieramy model
const EventModel = require("../models/EventModel")

module.exports = {
  // 6. kontroler bedzie miał 3 metody
  // 1
  index: (req, res, next) => {
    res.json({
      events: [
        {
          name: "Krystian Dziopa",
          event: { key: "frontend", val: "Front End" },
          city: { key: "Warsow", val: "Warszawa" },
        },
        {
          name: "Łukasz Badocha",
          event: { key: "backend", val: "Back End" },
          city: { key: "cracow", val: "Kraków" },
        },
      ],
    })
  },

  // 13. modyfikujemy metode create, która stworzy obiekt event
  create: (req, res, next) => {
    // res.send('create') dla metody get

    // const event = req.body
    const event = new EventModel({
      name: req.body.name,
      event: req.body.event,
      city: req.body.city,
    })

    // res.end(JSON.stringify(event))
    // zamiast wysyłac obiekt do apliakcjiktóra go wysłała zapiszemy event w bazie
    event.save((err, event) => {
      if (err) {
        return res.status(500).json({
          message: "error while creating event",
          error: err,
        })
      }

      return res.status(201).json(event)
    })
  },

  delete: (req, res, next) => {
    // res.send(req.params)

    const id = req.params.id

    EventModel.findByIdAndRemove(id, (err, event) => {
      if (err) {
        return res.status(500).json({
          // te komunikaty wymslamy sami
          message: 'Error while deleting event',
          error: err
        })
      }

      return res.status(200).json({
         // te komunikaty wymslamy sami
        id: id,
        deleted: true
      })
    })
  },
}

// 7. JESLI ROUTING I KONTROLLER DZIAŁAJĄ TO KOLEJNYM KROKIEM JEST STWORZENIE BAZYDANYCH
