import React, { useEffect } from "react"
import "./App.css"

const App = () => {
  const parkingSpaces = []
  for (let i = 0; i < 12; i++) {
    if (i % 2 == 0)
      parkingSpaces.push(<ParkingSpace key={i} number={i} isOccupied={false} />)
    else
      parkingSpaces.push(<ParkingSpace key={i} number={i} isOccupied={true} />)
  }

  return (
    <React.Fragment>
      <h1>Smart Parking System</h1>
      <div className="parking-grid">{parkingSpaces}</div>
    </React.Fragment>
  )
}

const ParkingSpace = ({ number, isOccupied }) => {
  if (isOccupied) return <div className="space blue">{number}</div>
  else return <div className="space red">{number}</div>
}

export default App
