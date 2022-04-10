import React from 'react';
import avatar from './images/avatar.svg';
import background from './images/mat.webp'
import './home.css';
import { Button } from 'bootstrap';

export default function Home() {
  return (

    <div id='home' 
         className='container'
    >
        <img src={avatar} 
             className='img-fluid rounded-circle  center mx-auto d-block' 
             alt='avatar'
             style={{maxWidth: '15%'}}
             />
        <div className='.container-md'>
        <h1 style={{color:'whitesmoke'}}>Data Scientist</h1>
        </div>
    </div>

)
}
