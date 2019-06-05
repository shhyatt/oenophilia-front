import React from "react"
import Favorites from './Favorites'

import { Card } from 'semantic-ui-react'

const FavoriteList = ({ myFavorites, wines, addToFavorites }) => {

  const renderFavorites = () => {
    return myFavorites.map(favorite => <Favorites key={`fav_${favorite.id}`} favorite={favorite} wines={wines} addToFavorites={addToFavorites}/>)
  }

  return (
  <div className="border">
    <h3>Your Favorites:</h3>
    <Card.Group>
      {renderFavorites()}
    </Card.Group>
  </div>
  )
}

export default FavoriteList
