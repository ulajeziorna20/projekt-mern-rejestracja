const express = require("express")
const router = express.Router()

// 5. import kontrolera
const EventsController = require('../controllers/EventsController')

module.exports = () => {
  // GET events 
  router.get("/", EventsController.index )

   // POST /events/add 
   router.post("/add", EventsController.create )

    // DELETE /events/delete/:id
  router.delete("/delete/:id", EventsController.delete )

  // musimy jeszcze zwrócić router
  return router
}
