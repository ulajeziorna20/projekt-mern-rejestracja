import { useState } from "react"

import axios from "axios"
import Select from "./Select"
import "./Form.css"

const Form = () => {
  const [name, setName] = useState("")
  const [event, setEvent] = useState({
    key: "",
    value: "",
  })
  const [city, setCity] = useState({
    key: "",
    value: "",
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
      value: e.target.options[e.target.selectedIndex].innerText,
    })
  }

  const handleChangeCity = (e) => {
    setCity({
      key: e.target.value,
      value: e.target.options[e.target.selectedIndex].innerText,
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
    saveEvent()

    resetForm()
  }

  const saveEvent = (eventObj) => {
    console.log("saveEvent")
  }

  const resetForm = () => {
    setName("")
    setEvent({
      key: "",
      value: "",
    })
    setCity({
      key: "",
      value: "",
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
