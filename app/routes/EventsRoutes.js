const express = require("express")
const router = express.Router()

// import kontrolera
const EventsController = require('../controllers/EventsController')

module.exports = () => {
  // GET events 
  router.get("/", EventsController.index )

   // POST /events/add 
   router.get("/add", EventsController.create )

    // DELETE /events/delete/:id
  router.get("/delete", EventsController.delete )

  // musimy jeszcze zwrócić router
  return router
}
