import React from "react"
import Wine from './Wine'

import { Card } from 'semantic-ui-react'

const WineList = (props) => {
   //console.log(props);
  const renderWine = () => {
    return props.checkedWines.map(wine => <Wine key={wine.name} wineitem={wine} addToFavorites={props.addToFavorites}
    addToPairings={props.addToPairings} selected={false}
    selectedfood={props.selectedfood}/>)
  }

  return (
  <div className="border">
    <h3>Select a Wine</h3>
    <Card.Group>
      {renderWine()}
    </Card.Group>
  </div>
  )
}

export default WineList
