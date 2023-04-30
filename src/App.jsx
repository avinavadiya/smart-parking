import React, { useState } from "react"
import { database } from "./firebase"
import { onValue, ref } from "firebase/database"
import "./App.css"

const App = () => {
  const parkingDBRef = ref(database, "/test")
  const [parkingSpaces, setParkingSpaces] = useState([])

  onValue(parkingDBRef, snapshot => {
    const parkingData = snapshot.val()
    setParkingSpaces(parkingData)
    console.log(parkingSpaces)
  })

  const parkingGrid = []
  for (let i = 0; i < 2; i++) {
    if (i % 2 == 0)
      parkingGrid.push(<ParkingSpace key={i} number={i} isOccupied={false} />)
    else parkingGrid.push(<ParkingSpace key={i} number={i} isOccupied={true} />)
  }
  return (
    <React.Fragment>
      <h1>Smart Parking System</h1>
      <div className="parking-grid">{parkingGrid}</div>
    </React.Fragment>
  )
}

const ParkingSpace = ({ number, isOccupied }) => {
  if (isOccupied) return <div className="space blue">{number}</div>
  else return <div className="space red">{number}</div>
}

export default App
