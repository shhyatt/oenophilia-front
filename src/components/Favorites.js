import React from "react"

import { Card, Button, Icon, Image } from 'semantic-ui-react'

const Favorites = ({ favorite, wines, addToFavorites }) => {

  const wineitem = wines.find(wine => wine.id === favorite.wine_id)

  const handleClick = (favorite) => {
    addToFavorites(favorite.wine_id, parseInt(localStorage.id))
  }

  return (
  <React.Fragment>
    <Card>
      <Card.Content>
      <h4>{wineitem.name}</h4>
      <h5>{wineitem.catagory}</h5>
      <p>{wineitem.variety}</p>
      <p>{wineitem.description}</p>
      </Card.Content>
      <Image centered src={wineitem.img} style={{width:'50px'}} alt={wineitem.name} />
      <Button color="red" onClick={()=>handleClick(favorite)} icon>
        <Icon name='heart outline' />
      </Button>
    </Card>
  </React.Fragment>)
}

export default Favorites
