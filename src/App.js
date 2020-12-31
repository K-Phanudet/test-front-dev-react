import  React, { Component } from 'react'
import Home from './home'
import Pokemon from './pokemon'
import Function1 from './function1'
import Function2 from './function2'
import Function3 from './function3'
import Nav from './nav'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
export default class App extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         order: [],
  //     }
  // }
  // getOrder(order) {
  //     const orderList = this.state.order
  //     orderList.push(order)
  //     this.setState({ order: orderList })
  // }

  render() {
      return (
          <div className="App" style={{padding: "25px 15px",width:"100vw",height:"100vh"}}>
            <link href="//db.onlinewebfonts.com/c/30451b55e1338d7cebadbc45197939a3?family=Dobra" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"></link>  
              <div className="header-bar">
                Test Fontend
              </div>
              <Router>
                  <Nav />
                  <Route exact path="/" component={() => <Home  />} />
                  <Route exact path="/pokemon" component={() => <Pokemon/>} />
                  <Route exact path="/function1" component={()=> <Function1/>}/>
                  <Route exact path="/function2" component={()=> <Function2/>}/>
                  <Route exact path="/function3" component={()=> <Function3/>}/>
              </Router>
          </div>
      )
  }
}
