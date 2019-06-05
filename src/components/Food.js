import React from "react"
import { Button, Icon, Image } from 'semantic-ui-react'

const Food = ({fooditem, selectFood, imgUrl}) => {

  const handleClick = (fooditem) => {
    selectFood(fooditem.name)
  }

  {console.log(imgUrl)}
  return (
  <div className="">
    <Button textAlign="center" onClick={() => handleClick(fooditem)} icon>
      <Image centered style={{width:'50px'}}src={require(`${imgUrl}`)}/>
      {fooditem.name}
    </Button>
  </div>
  )
}

export default Food
