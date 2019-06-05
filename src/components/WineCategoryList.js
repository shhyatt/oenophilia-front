import React, { Component } from 'react'
import WineCategory from './WineCategory'
import { Card } from 'semantic-ui-react'

export default class WineCategoryList extends Component {



  renderCategories() {
    const uniqueWines = [...new Set( this.props.filteredVarietals.map(wine => wine.variety)) ];
    return uniqueWines.map(wine => <WineCategory key={wine} wine={wine} handleWineCheck={this.props.handleWineCheck}
    checked={this.props.checked}/>)
  }

  render() {
    //console.log(this.props);
    return(
      <div className="border">
        <h3>Select a Wine Category</h3>
        <Card.Group>
          {this.renderCategories()}
        </Card.Group>
      </div>
    )
  }
}
