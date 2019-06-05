import React from "react";
import FoodList from '../components/FoodList'

//also maybe change to a functional component based on where state is held

class FoodContainer extends React.Component {


  render() {
    return (
      <div>
        <FoodList
          foods={this.props.foods}
          selectFood={this.props.selectFood}
          addToPairings={this.props.addToPairings}

        />
      </div>
    )
  }
}
export default FoodContainer
