import React from "react"
import FullWine from './FullWine'

import { Card } from 'semantic-ui-react'

const FullWineList = ({ wines, wineListToggle }) => {

  const renderWines = () => {
    return wines.map(wine => <FullWine key={`listed_${wine.name}`} wineitem={wine} />)
  }

  return (
  <div className="border">
    <Card.Group>
      {renderWines()}
    </Card.Group>
  </div>
  )
}

export default FullWineList
