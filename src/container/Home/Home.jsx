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
             className=' rounded-circle mx-auto d-none d-md-block'  
             alt='avatar'
             style={{maxWidth: '10%'}}
             />
        <div className='.container-md'>
        <span className='title'>
          Data Scientist
        </span>
        
        </div>
    </div>

)
}
