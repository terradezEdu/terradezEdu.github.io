import React, { useState, useEffect } from 'react'
import './researchs.css'
import crowd from './images/crowd.svg'
import phd from '../Bio/images/robots_phd.svg'
import unity from './images/unity_logo.png'
import pytorch from './images/pytorch_logo.svg'


export default function Researchs() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });  
    return (
        <div className='container-fluid border border-5 border-dark'
             id='research' 
             style={{backgroundColor: '#282c34', 
                    color:'white'}}>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-5">
                        {isDesktop ? (
                            <span></span>
                          ) : (
                            <h1 className='text-start' id='research'> Research </h1>
                          )}
                        </div>
                        <div className="col">
                          <span className='research'>
                            <img  className=' float-start rounded-circle mx-auto d-none d-md-block' src={phd} alt='phd'
                                  style={{maxWidth: '15%', fill: 'blue'}}
                              />
                            {isDesktop ? (
                              <h1 className='text-start' id='research'> Research </h1>
                          ) : (
                            <span></span>
                          )}
                          </span>
                        </div>
                        <div className="col">
                        </div>
                      </div>
                    </div>

                    <span>
                      <img  className='float-end  mx-auto d-none d-md-block' src={crowd} alt='crowd'
                          style={{maxWidth: '15%'}}
                      />
                       <h4 style={{marginTop: '20px', marginLeft: '25px', marginRight: '15px'}}>The research of my thesis focuses on deploying a Crowd Simulator which contains all the 
                       problems related to pathfinders optimization, simulation of complicated behaviours with artifical neuronal networks (ANN) and the scale of 
                       these problems in terms of computational cost and time are giant (crowds can be more than 100 ANN trining at the same time)</h4>
                      
                      <img  className='float-start rounded-circle mx-auto d-none d-md-block' src={unity} alt='unity'
                          style={{maxWidth: '3%', marginTop: '30px'}}
                      />
                        <img  className='float-start rounded-circle mx-auto d-none d-md-block' src={pytorch} alt='pytorch'
                          style={{maxWidth: '1.5%', marginTop: '35px', marginRight: '15px'}}
                      /> 
                      <span>
                        <h4 style={{marginTop: '30px', marginLeft: '30px', marginRight: '15px'}}>To create this Crowd Simulator, we use the graphic motor Unity to create a 
                        complex environment where the agents (ANN) have to solve it. The ANNs are developed with the framework Pytorch following the 
                        state of the art in deep reinforcement learning (DRL) such as DDPG, D4PG, PPO and the classic DQN as a benchmark. 
                        More info in my <a href="https://github.com/terradezEdu/phd" style={{color: 'whitesmoke'}}>GitHub</a> </h4>
                      </span>
                         
                    </span>
            
         </div>
    )
  }