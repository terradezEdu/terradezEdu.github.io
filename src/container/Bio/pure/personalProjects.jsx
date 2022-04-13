import React, { useState } from 'react'
import PropTypes from 'prop-types';
import ml from '../images/gears.png'
import phd from '../images/robots_phd.svg'
import fstack from '../images/full_stack.png'
import rock from '../images/rock_climbing.svg'

const PersonalProjects = ({ fun }) =>{
    
    const [isShownPHD, setIsShownPHD] = useState(false);
    const [isShownFstack, setIsShownFstack] = useState(false);
    const [isShownRock, setIsShownRock] = useState(false);

    return (
       
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card" 
                        style={{backgroundColor: '#282c34'}}>
                        <h3 className="card-title"
                            style={{color: 'whitesmoke'}}>
                            Personal Projects
                        </h3>
                        <img src={ml} 
                                className='img-fluid rounded-circle  center mx-auto d-block' 
                                alt='avatar'
                                style={{maxWidth: '25%'}}
                        />
                        <div className="card-body">
                        <button onClick={() => fun('menu')} className="btn btn-primary">Back</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-9" style={{backgroundColor: '#282c34', color: 'whitesmoke', padding:'15px'}}>
                    
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100"
                             style={{backgroundColor: '#282c34'}}
                             onMouseEnter={() => setIsShownPHD(true)}
                            onMouseLeave={() => setIsShownPHD(false)}>

                            <div className='card-header'>
                                <h5 className="card-title">PhD Thesis</h5>
                                <img src={phd} 
                                className='img-fluid center mx-auto d-block' 
                                alt='avatar'
                                style={{maxWidth: '25%'}}

                                />
                            </div>
                            <div className='card-body'>
                                <h6> Pedestrian Simulator with Deep Learning</h6>
                            </div>
                            {isShownPHD && (
                                <div className="alert alert-light" role='alert'>
                                    The hardest project so far!
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100"
                             style={{backgroundColor: '#282c34'}}
                             onMouseEnter={() => setIsShownFstack(true)}
                            onMouseLeave={() => setIsShownFstack(false)}>

                            <div className="card-header">
                                <h5 className="card-title">Full Stack Developer Learning Path</h5>
                                <img src={fstack} 
                                className='img-fluid center mx-auto d-block' 
                                alt='avatar'
                                style={{maxWidth: '35%'}}

                                />
                            </div>
                            <div className='card-body'>
                                <h6>Trying to combine my data scientist skills with web development to offer a complete solution </h6>
                            </div>
                            {isShownFstack && (
                                <div className="alert alert-light" role="alert">
                                    Custom dashboard for a time series analysis
                                </div>
                            )}
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="card h-100"
                             style={{backgroundColor: '#282c34'}}
                             onMouseEnter={() => setIsShownRock(true)}
                            onMouseLeave={() => setIsShownRock(false)}>

                            <div className="card-header">
                                <h5 className="card-title">Rock Climbing</h5>
                                <img src={rock} 
                                className='img-fluid center mx-auto d-block' 
                                alt='avatar'
                                style={{maxWidth: '25%'}}

                                />
                            </div>
                            <div className='card-body'>
                                <h6>I love the mountain and especially the sport climbing. </h6>
                            </div>
                            {isShownRock && (
                                <div className="alert alert-light" role="alert">
                                    Triying to send my first 8a this year.
                                </div>
                            )}
                        </div>            
                    </div>
                </div>

                </div>
            </div>
        </div>
     
    )
  }

  PersonalProjects.propTypes = {
    fun: PropTypes.func.isRequired
};

export default PersonalProjects;