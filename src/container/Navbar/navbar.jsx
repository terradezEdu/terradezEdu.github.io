import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
            <a className='navbar-brand' href='#home'>Eduardo García Terrádez</a>
            <button className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNavDropdown' 
                    aria-controls='navbarNavDropdown' 
                    aria-expanded='false'
                    aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                  <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='#bio'>Bio</a>
                  </li>
                  <li className='nav-item'>
                  <a className='nav-link' href='#research'>Research</a>
                  </li>
                  <li className='nav-item'>
                  <a className='nav-link' href='#projects'>Projects</a>
                  </li>
              </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}
