import React from 'react'
import {Link, NavLink} from "react-router-dom"
import '../css/Navbar.css'
export default function Navbar(){
return (
<div className="navbar">
  <div className="navbar-brand">
    <Link to="/" className='brand'>Movie App</Link>
  </div>
  <div className="navbar-links">
    <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
    <NavLink to="/favourites" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Favourites</NavLink>
  </div>
</div>
)
}
