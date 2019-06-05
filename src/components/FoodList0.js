import React from "react"
import Food from './Food'
// import redmeat from './redmeat.png'
// import lamb from './lamb.png'
// import pork from './pork.png'
// import poultry from './poultry.png'
// import fish from './fish.png'
// import salad from './salad.png'
// import dessert from './dessert.png'
// import hardcheese from './hardcheese.png'
// import softcheese from './softcheese.png'
// import redsaucepasta from './redsaucepasta.png'
// import whitesaucepasta from './whitesaucepasta.png'

import { Button } from 'semantic-ui-react'

const FoodList = ({foods, selectFood, addToPairings}) => {

  const renderFood = () => {
    return foods.map(food => <Food selectFood={selectFood} key={food.name} imgUrl={`./${food.name.toLowerCase().split(" ").join("")}.png`} fooditem={food}
    addToPairings={addToPairings} />)
  }

  return (
  <div className="border">
    <h3>Select a Food Group:</h3>
    <Button.Group>
      {renderFood()}
    </Button.Group>
  </div>
  )
}

export default FoodList
