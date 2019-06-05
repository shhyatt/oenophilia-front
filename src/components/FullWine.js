import React from "react"

import { Card, Image } from 'semantic-ui-react'

const FullWine = ({ wineitem, addToFavorites, addToPairings }) => {
  //console.log(wineitem);

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
    </Card>
  </React.Fragment>)
}

export default FullWine
