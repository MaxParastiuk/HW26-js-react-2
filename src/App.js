import React, { useState } from "react"
import logo from "./logo.svg"
import ReactDOM from "react-dom"
import "./App.css"
import Row from "./row"

function App() {
  const [formValues, setFormValues] = useState([
    {
      name: "John",
      surname: "John",
      days: 30,
      salaryPerDay: 100,
    },
    {
      name: "Vic",
      surname: "Vics",
      days: 18,
      salaryPerDay: 100,
    },
    {
      name: "Petr",
      surname: "Petrov",
      days: 28,
      salaryPerDay: 150,
    },
    {
      name: "Den",
      surname: "Denov",
      days: 40,
      salaryPerDay: 110,
    },
  ])

  let handleChange = (index, event) => {
    let newFormValues = [...formValues]
    newFormValues[index][event.target.name] = event.target.value
    setFormValues(newFormValues)
  }

  return (
    <div className="App">
      <header className="App-header">
        {formValues.map((element, index) => (
          <Row
            name={element.name}
            surname={element.surname}
            days={element.days}
            salaryPerDay={element.salaryPerDay}
            index={index}
            handleChange={handleChange}
          />
        ))}
      </header>
    </div>
  )
}

export default App
