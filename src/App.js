import React, { Component } from 'react';
// import { NavLink, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import FoodContainer from './containers/FoodContainer'
import WineContainer from './containers/WineContainer'
import ProfileContainer from './containers/ProfileContainer'
import LoginForm from './components/LoginForm'
import Registration from './components/Registration'

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

class App extends Component {
  //LIFECYCLE*******************************************************************
  state = {
    foods: [],
    wines: [],
    users: [],
    reviews: [],
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    birthday: "",
    loginToggle: false,
    registrationToggle: false,
    foodwines: [],
    filteredVarietals: [],
    myFavorites: [],
    wineListToggle: false,
    pairsToggle: false,
    displayToggle: false,
    favoritesToggle: false,
    selectedFood: null,
    myPairs: [],
    favBtnClicked: false,
  }

  componentDidMount() {
    this.fetchFoods()
    this.fetchWines()
    this.fetchUsers()
    this.fetchFoodwines()
    this.fetchMyFavorites()
    this.fetchReviews()
  }

  //EVENT LISTENERS*************************************************************
  selectFood = (fooditem) => {
    //console.log(fooditem);
    let selectedFood = this.state.foods.find(food => food.name === fooditem)
    let relevantPairs = this.state.foodwines.filter(pair => pair.food_id === selectedFood.id)
    let relevantWines = relevantPairs.map(pair => pair.wine_id)
    let newFilteredVarietals = this.state.wines.filter(wine => relevantWines.includes(wine.id))
    this.setState({
      selectedFood: selectedFood,
      filteredVarietals: newFilteredVarietals
    })
  }

  addToFavorites = (wineID, userID) => {
    if (!this.state.myFavorites.find(fave => fave.wine_id === wineID)){
      fetch('http://localhost:3000/api/v1/favorites', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({
          wine_id: wineID,
          user_id: userID
        })
      })
      .then(r => r.json())
      .then(favorite => {
        this.setState({
          myFavorites: [...this.state.myFavorites,favorite],
          favBtnClicked: true
        }, ()=>console.log(this.state.myFavorites, "added"))
      })
    } else {
      let favoriteToDelete = this.state.myFavorites.find(favorite => favorite.user_id === userID && favorite.wine_id === wineID)
      fetch(`http://localhost:3000/api/v1/favorites/${favoriteToDelete.id}`, {
        method: "DELETE"
      })
      let updatedFavorite = this.state.myFavorites.filter(fav => fav.wine_id !== wineID)
      this.setState({ myFavorites: updatedFavorite, favBtnClicked: false})
    }
  }
  //FETCH***********************************************************************
  fetchFoods() {
    fetch('http://localhost:3000/api/v1/foods')
    .then(r => r.json())
    .then(foods => this.setState({foods}))
  }

  fetchWines() {
    fetch('http://localhost:3000/api/v1/wines')
    .then(r => r.json())
    .then(wines => {
      this.setState({
        wines: wines,
        filteredVarietals: wines
      })
    })
  }

  fetchFoodwines() {
    fetch('http://localhost:3000/api/v1/foodwines')
    .then(r => r.json())
    .then(foodwines => this.setState({ foodwines }))
  }

  fetchUsers() {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(users => this.setState({users}))
  }


  fetchMyFavorites() {
    fetch('http://localhost:3000/api/v1/favorites')
    .then(r => r.json())
    .then(favorites => {
      let myFavorites = favorites.filter(favorite => favorite.user_id === parseInt(localStorage.id))
      this.setState({ myFavorites })
    })
  }

  fetchReviews() {
    fetch('http://localhost:3000/api/v1/reviews')
    .then(r => r.json())
    .then(reviews => {
      this.setState({
        reviews
      })
    })
  }

  //HELPER METHODS**************************************************************

  createUser = (event) => {
    event.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      birthday: this.state.birthday
    }
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(user => {
      localStorage.setItem('id',user.id)
      this.setState({
        users: [...this.state.users,user],
        registrationToggle: false,
        email: "",
        password: "",
        firstname: "",
        lastname: ""
      })
    })
  }

  updateReview = (review_id,rating,review) => {
    const data = {
      rating: rating,
      review: review
    }
    fetch(`http://localhost:3000/api/v1/reviews/${review_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(editted_review => {
      let updatedReviews = this.state.reviews.map(review => {
        if (review.id === editted_review.id) {
          return editted_review
        }
        return review
      })
      this.setState({
        reviews: updatedReviews
      })
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleLogin = (event) => {
    event.preventDefault()
    const user = this.state.users.find(user => user.email === this.state.email && user.password === this.state.password);
    if (!!user) {
      localStorage.setItem('id', user.id)
      this.setState({
        loginToggle: false,
        email: "",
        password: "",
      })
    } else {
      return alert("Please double check your email or password.")
    }
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({
      wineListToggle: false,
      pairsToggle: false,
      displayToggle: false,
      favoritesToggle: false
    })
  }

  handleLoginToggle = () => {
    this.setState({
      loginToggle: !this.state.loginToggle,
      registrationToggle: false
    })
  }

  handleRegistrationToggle = () => {
    this.setState({
      registrationToggle: !this.state.registrationToggle,
      loginToggle: false
    })
  }

  handleWineListToggle = () => {
    this.setState({
      wineListToggle: true,
      displayToggle: true,
      pairsToggle: false,
      favoritesToggle: false
    })
  }

  handlePairListToggle = () => {
    this.setState({
      wineListToggle: false,
      displayToggle: true,
      pairsToggle: true,
      favoritesToggle: false
    })
  }

  handleFavoritesToggle = () => {
    this.setState({
      wineListToggle: false,
      displayToggle: true,
      pairsToggle: false,
      favoritesToggle: true
    })
  }

  handleHome = () => {
    this.setState({
      wineListToggle: false,
      displayToggle: false,
      pairsToggle: false,
      favoritesToggle: false,
      selectedFood: null,
      filteredVarietals: this.state.wines
    })
  }

  addToPairings = (food, wine) => {
    // console.log("food", food)
    // console.log("wine", wine);
    let pairing = this.state.foodwines.find(foodwine => {
      return (food.id === foodwine.food_id && wine.id === foodwine.wine_id)
    })
    //console.log(pairing.id, parseInt(localStorage.id));
    fetch("http://localhost:3000/api/v1/reviews", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        foodwine_id: pairing.id,
        user_id: localStorage.id
      })
    })
    .then(r => r.json())
    .then(newReview => {
      this.setState({
        reviews: [...this.state.reviews, newReview]
      })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loginToggle ?
          <LoginForm
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            email={this.state.email}
            password={this.state.password}
          /> :
          null
        }
        {this.state.registrationToggle ?
           <Registration
             handleChange={this.handleChange}
             password={this.state.password}
             lastname={this.state.lastname}
             firstname={this.state.firstname}
             email={this.state.email}
             createUser={this.createUser}
            /> :
            null
          }
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item onClick={this.handleHome} as='a'>
              <Icon name='home' />
              Oenophilia
            </Menu.Item>
            { localStorage.getItem('id') ?
              <React.Fragment>
                <Menu.Item onClick={this.handleLogout} as='a'>
                  <Icon name='sign-out' />
                  Logout
                </Menu.Item>
                <Menu.Item onClick={this.handleFavoritesToggle} as='a'>
                  <Icon name='heart' />
                  Favorite
                </Menu.Item>
                <Menu.Item onClick={this.handlePairListToggle} as='a'>
                  <Icon name='food'/>
                  Past Wines Pairings
                </Menu.Item>
              </React.Fragment> :
            <Menu.Item onClick={this.handleLoginToggle} as='a'>
              <Icon name='sign-in' />
              Login
            </Menu.Item>
            }
            { localStorage.getItem('id') ?
              null :
              <Menu.Item onClick={this.handleRegistrationToggle} as='a'>
                <Icon name='user' />
                Sign Up
              </Menu.Item>
            }
            <Menu.Item onClick={this.handleWineListToggle} as='a'>
              <Icon name='glass martini'/>
              Wine List
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment.Inline>
              {this.state.displayToggle ?
                <ProfileContainer
                  wines={this.state.wines}
                  wineListToggle={this.state.wineListToggle}
                  foodwines={this.state.foodwines}
                  pairsToggle={this.state.pairsToggle}
                  foods={this.state.foods}
                  reviews={this.state.reviews}
                  updateReview={this.updateReview}
                  favoritesToggle={this.state.favoritesToggle}
                  myFavorites={this.state.myFavorites}
                  addToFavorites={this.addToFavorites}
                /> :
                <React.Fragment>
                  {this.state.selectedFood === null ?
                    <FoodContainer
                    foods={this.state.foods}
                    selectFood={this.selectFood}
                    /> :
                    <React.Fragment>
                      <FoodContainer
                      foods={this.state.foods}
                      selectFood={this.selectFood}
                      />
                      <WineContainer
                      wines={this.state.wines}
                      filteredVarietals={this.state.filteredVarietals}
                      addToFavorites={this.addToFavorites}
                      addToPairings={this.addToPairings}
                      selectedfood={this.state.selectedFood}
                      />
                    </React.Fragment>
                  }
                </React.Fragment>
              }
            </Segment.Inline>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
