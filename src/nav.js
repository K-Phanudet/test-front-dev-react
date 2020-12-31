import React, { Component } from 'react'
import { NavLink  } from 'react-router-dom'
import './nav.css'


export default class Navbar extends Component {


  render() {
    return (

      
        <nav className="navbar">
            <NavLink exact to="/" activeClassName="active" className="navbar-item">
                Home
            </NavLink>
            <NavLink to="/pokemon" activeClassName="active" className="navbar-item">
                Pokemon
            </NavLink>
            <NavLink to="/function1" activeClassName="active" className="navbar-item">
                Function 1
            </NavLink>
            <NavLink to="/function2" activeClassName="active" className="navbar-item">
                Function 2
            </NavLink>
            <NavLink to="/function3" activeClassName="active" className="navbar-item">
                Function 3
            </NavLink>
        </nav>
      
    )
  }
}
