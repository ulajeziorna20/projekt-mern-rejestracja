module.exports = {
  // kontroler bedzie miał 3 metody
  // 1
  index: (req, res, next) => {
    res.json({
      events: [
        {
          name: "Krystian Dziopa",
          event: { key: "frontend", val: "Front End" },
          city: {key: 'Warsow', val: 'Warszawa'}
        },
        {
          name: "Łukasz Badocha",
          event: { key: "backend", val: "Back End" },
          city: {key: 'cracow', val: 'Kraków'}
        },
      ],
    })
  },

  create: (req, res, next) => {
    // res.send('create') dla metody get

    const event = req.body

    res.end(JSON.stringify(event))
  },

  delete: (req, res, next) => {
    res.send('delete')
  }
}


// JESLI ROUTING I KONTROLLER DZIAŁAJĄ TO KOLEJNYM KROKIEM JEST STWORZENIE BAZYDANYCH