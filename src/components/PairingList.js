import React from "react"
import Pairs from './Pairs'

import { Card } from 'semantic-ui-react'

const PairingList = ({ foodwines, foods, wines, reviews, updateReview }) => {

  const myReviews = reviews.filter(myReview => parseInt(myReview.user_id) === parseInt(localStorage.id))
  const myFoodWines = myReviews.map(myFW => foodwines.find(foodwine =>  myFW.foodwine_id === foodwine.id))

  const renderPairs = () => {
    return myFoodWines.map(pair => <Pairs
      key={`pair_${pair.id}`}
      pair={pair}
      foods={foods}
      wines={wines}
      reviews={myReviews}
      updateReview={updateReview}
    />)
  }

  return (
    <React.Fragment>
      <div className="border">
        <h3>Previous Pairings:</h3>
        <Card.Group>
          {renderPairs()}
        </Card.Group>
      </div>
    </React.Fragment>
  )
}

export default PairingList
