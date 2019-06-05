import React from "react";
import FullWineList from '../components/FullWineList'
import PairingList from '../components/PairingList'
import FavoriteList from '../components/FavoriteList'

//also maybe change to a functional component based on where state is held

class ProfileContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.wineListToggle ? <FullWineList
           wines={this.props.wines}
           wineListToggle={this.props.wineListToggle}
           /> : null
        }
        {this.props.pairsToggle ? <PairingList
          foodwines={this.props.foodwines}
          foods={this.props.foods}
          wines={this.props.wines}
          reviews={this.props.reviews} updateReview={this.props.updateReview}
          myFavorites={this.props.myFavorites}
          addToFavorites={this.props.addToFavorites}
           /> : null
        }
        {this.props.favoritesToggle ? <FavoriteList
          myFavorites={this.props.myFavorites}
          wines={this.props.wines}
          addToFavorites={this.props.addToFavorites}
          /> : null
        }
      </div>
    )
  }
}
export default ProfileContainer
