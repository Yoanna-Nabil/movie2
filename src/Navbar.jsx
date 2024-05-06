import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  let [color, setColor]= useState(window.location.pathname)

  
  return <>
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" >
            <Link onClick={ () => setColor('/login')} className={color == '/login'? "nav-link active text-white fw-bold" : "nav-link fw-bold"} aria-current="page" to= {'/login'}>Login</Link>
            </li>
            <li className="nav-item" >
            <Link onClick={ () => setColor('/home')} className={color == '/home'? "nav-link active text-white fw-bold" : "nav-link fw-bold"} aria-current="page" to= {'/home'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link onClick={ () => setColor('/address')} className={color == '/address'? "nav-link active text-white fw-bold" : "nav-link fw-bold"} to={'/address'} >Address</Link>
            </li>
            
            <li className="nav-item">
              <Link onClick={ () => setColor('/products')} className={color == '/products'? "nav-link active text-white fw-bold" : "nav-link fw-bold"} to={'/products'} >Products</Link>
            </li>
          
            <li className="nav-item">
              <Link onClick={ () => setColor('/movies')} className={color == '/movies'? "nav-link active text-white fw-bold" : "nav-link fw-bold"} to={'/movies'} >Movies</Link>
            </li>

            
          </ul>

        
        </div>
      </div>
    </nav>
  </>
}
