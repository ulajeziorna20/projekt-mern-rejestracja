import { useState } from "react"

import config from "../config"

import axios from "axios"
import Select from "./Select"
import "./Form.css"

const Form = (props) => {
  const [name, setName] = useState("")
  const [event, setEvent] = useState({
    key: "",
    val: "",
  })
  const [city, setCity] = useState({
    key: "",
    val: "",
  })
  const [errors, setErrors] = useState([])

  const choicesCities = [
    ["", "---"],
    ["online", "Online"],
    ["warsaw", "Warszawa"],
    ["krakov", "Kraków"],
  ]

  const choicesEvents = [
    ["", "---"],
    ["front-end-react", "Front End - ReactJS"],
    ["back-end-react", "Back End - ReactJS"],
    ["full-stack-react", "Full Stack - MERN"],
    ["tester-manual", "Tester manualny"],
  ]

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEvent = (e) => {
    console.log(e.target.value)
    setEvent({
      key: e.target.value,
      val: e.target.options[e.target.selectedIndex].innerText,
    })
  }

  const handleChangeCity = (e) => {
    setCity({
      key: e.target.value,
      val: e.target.options[e.target.selectedIndex].innerText,
    })
  }

  const validate = (e) => {
    e.preventDefault()

    let errorsValidate = []

    if (name.trim() === "") {
      errorsValidate.push("Wpisz imię i nazwisko")
    }

    if (event.key.trim() === "") {
      errorsValidate.push("Wybierz szkolenie")
    }

    if (city.key.trim() === "") {
      errorsValidate.push("Wybierz miasto")
    }

    if (errorsValidate.length > 0) {
      setErrors(
        errorsValidate.map((errorTxt, index) => {
          return <li key={index}>{errorTxt}</li>
        })
      )

      return false
    }

    // gdy walidacja sie udała tworzymy obiekt nowego eventu
    const newEvent = {
      name: name,
      event: event,
      city: city,
    }
    // i teraz przekazujemy obiekt eventu do funkcji saveEvent

    saveEvent(newEvent)

    resetForm()
  }

  const saveEvent = (eventObj) => {
    console.log(JSON.stringify(eventObj))

    axios
      .post(config.api.url + "/events/add",  eventObj, {
        mode: "cors"
      })
      .then((res) => {
        props.getEvents()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const resetForm = () => {
    setName("")
    setEvent({
      key: "",
      val: "",
    })
    setCity({
      key: "",
      val: "",
    })
    setErrors([])
  }

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={validate}>
        <div className="wrapper">
          <label htmlFor="name">Imie i nazwisko</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="wrapper">
          <label htmlFor="event">Wydarzenie</label>
          <Select
            values={choicesEvents}
            selectedValue={event.key}
            onValueChange={handleChangeEvent}
            id="event"
          />
        </div>
        <div className="wrapper">
          <label htmlFor="city">Miasto</label>
          <Select
            values={choicesCities}
            selectedValue={city.key}
            onValueChange={handleChangeCity}
            id="city"
          />
        </div>
        <div className="wrapper">
          <button id="btn-submit">Zapisz na szkolenie</button>
        </div>
      </form>

      <div className="errorsWrapper">
        <ul className="errors">{errors}</ul>
      </div>
    </div>
  )
}

export default Form
