import React from "react"

import ReviewForm from './ReviewForm'

import { Card } from 'semantic-ui-react'

const Pairs = ({ pair, foods, wines, reviews, updateReview }) => {

  const findFood = foods.find(food => food.id === pair.food_id)
  const findWine = wines.find(wine => wine.id === pair.wine_id)
  const myReview = reviews.find(review => review.foodwine_id === pair.id)

  return (
  <React.Fragment>
    <Card>
      <Card.Content>
        <p>Dish: {findFood.name}</p>
        <p>Wine: {findWine.name}</p>
      </Card.Content>
      {myReview.rating ? null : <ReviewForm review={myReview.id} updateReview={updateReview}/>}
    </Card>
  </React.Fragment>)
}

export default Pairs
