import React from "react";
import WineList from '../components/WineList'
import WineCategoryList from '../components/WineCategoryList'
import FullWineList from '../components/FullWineList'

//maybe change to a functional component depending on where state is held

class WineContainer extends React.Component {

  state = {
    filteredWines: [],
  }


  handleCheck = (e) => {
    //console.log(e.target.checked);

     let filteredWines = this.props.wines.filter(wine => wine.variety === e.target.value)
    if(e.target.checked === true){
         this.setState({
           filteredWines: [...this.state.filteredWines, ...filteredWines]
         })
       } else if(e.target.checked === false){
         let alteredList = this.state.filteredWines.filter(wine => wine.variety !== e.target.value)
         this.setState({
           filteredWines: alteredList
         })
        //console.log("Hellooooo", e.target.value);
        }

   }

  render() {


    return (
      <div>
        {this.props.wineListToggle ?
          <FullWineList
            wines={this.props.wines}
          /> :
          null
        }
        <WineCategoryList
          filteredVarietals={this.props.filteredVarietals}
          handleWineCheck={this.handleCheck}
          checked={this.state.checked}
        />
        <WineList
          checkedWines={this.state.filteredWines}
          checked={this.state.checked}
          addToFavorites={this.props.addToFavorites}
          addToPairings={this.props.addToPairings}
          selectedfood={this.props.selectedfood}
        />
      </div>
    )
  }
}
export default WineContainer
