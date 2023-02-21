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


const choicesEvents = [
  ['', '---'],
  ['online', 'Online'],
  ['warsaw', 'Warszawa'],
  ['krakov', 'Kraków'],

]

const choicesCities = [
  ['', '---'],
  ['front-end-react', 'Front End - ReactJS'],
  ['back-end-react', 'Back End - ReactJS'],
  ['full-stack-react', 'Full Stack - MERN'],
  ['tester-manual', 'Tester manualny']
]


const handleChangeName = (e) => {
  setName(e.target.value)
}

const handleChangeEvent = (e) => {
  setEvent({
    key: e.target.value,
    value: e.target.options[e.target.selectedIndex].innerText
  })
}


const handleChangeCity = (e) => {
  setCity({
    key: e.target.value,
    value: e.target.options[e.target.selectedIndex].innerText
  })
}








  return (
    <div className="form-wrapper">
      <form action="#">
        <div className="wrapper">
          <label htmlFor="name">Imie i nazwisko</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChangeName}/>
        </div>
        <div className="wrapper">
          <label htmlFor="event">Wydarzenie</label>
          <Select 
          values={choicesEvents}
          selectedValue={event.key}
          onValueChange= {handleChangeCity}
          id='city'
          />
        </div>
        <div className="wrapper">
          <label htmlFor="city">Miasto</label>
          <Select 
          values={choicesCities}
          selectedValue={event.key}
          onValueChange= {handleChangeEvent}
          id='events'
          />
        </div>
        <div className="wrapper">
          <button id="btn-submit">Zapisz na szkolenie</button>
        </div>
      </form>

      <div className="errorsWrapper">
        <ul className="errors"></ul>
      </div>
    </div>
  )
}

export default Form
