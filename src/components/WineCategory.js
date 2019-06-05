import React, { Fragment } from 'react'
import { Card } from 'semantic-ui-react'

const WineCategory = (props) => {
  //console.log(props);


  return(

    <Fragment>
      <Card>
        <Card.Content>
        <input
          className="wine-check-input"
          type="checkbox"
          onChange={(e)=> props.handleWineCheck(e)}
          value={props.wine}
        />
        <label className="wine-check-label">
          {props.wine}
        </label>
        </Card.Content>
      </Card>
    </Fragment>
  )
}

export default WineCategory
