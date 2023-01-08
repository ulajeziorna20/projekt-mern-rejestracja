module.exports = {
  // kontroler bedzie miał 3 metody
  // 1
  index: (req, res, next) => {
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
  },

  create: (req, res, next) => {
    res.send('create')
  },

  delete: (req, res, next) => {
    res.send('delete')
  }
}