import React from 'react';
import experis from './images/experis_manpower.jpg'
import telefonica from './images/telefonica_logo.webp'
import saptools from './images/saptools_logo.jpg'
import nestle from './images/Nestle.jpg'
import './projects.css'

export default function ProjectsL() {

    return (
        <div id='projects' className='text-center'
             style={{backgroundColor: 'white', padding:'0px'}}>
             
            <div className='text-center border-5 border-dark'
                  style={{backgroundColor: 'rgb(152 158 169)'}}>
                    <span className='project'> Projects</span> 
             </div>
            
            <div id='carouselExampleDark' className='carousel carousel-dark slide' data-bs-ride='carousel'>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                    <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='1' aria-label='Slide 2'></button>
                    <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='2' aria-label='Slide 3'></button>
                    <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='3' aria-label='Slide 4'></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row'>
                            <div className='col-3'>
                            <img src={experis} 
                                    className='float-end  mx-auto d-none d-md-block' 
                                    alt='Experis'
                                    style={{witdh:'150px', height:'150px'}}
                                    />
                            </div>
                            <div className='col-8'>
                                <img src={telefonica} 
                                        className='float-start  mx-auto' 
                                        alt='Telefónica'
                                        style={{witdh:'600px', height:'500px'}}
                                        />
                                <div className='carousel-caption d-none d-md-block' style={{marginTop: '15px', color: 'whitesmoke'}}>
                                    <h4>Global Operations</h4>
                                    <h5>Data Scientist - Customer Experience</h5>
                                    <span>
                                       <h6>
                                            Deploy Deep learning model (XGBOOST) to measure the customer
                                            satisfaction in Chile, Brazil and Unite Kingdom.
                                        </h6>
                                        <h6>
                                            Crowd sourcing data analysis with NPL to identify weak points in the mobile
                                            network
                                        </h6>
                                    </span>
                                </div>
                            </div>                         
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row'>
                            <div className='col-3'>
                            <img src={experis} 
                                    className='float-end  mx-auto d-none d-md-block' 
                                    alt='Experis'
                                    style={{witdh:'150px', height:'150px'}}
                                    />
                            </div>
                            <div className='col-8'>
                                <img src={telefonica} 
                                        className='float-start  mx-auto d-none d-md-block' 
                                        alt='Telefónica'
                                        style={{witdh:'600px', height:'500px'}}
                                        />
                                <div className='carousel-caption d-none d-md-block' style={{marginTop: '15px', color: 'whitesmoke'}}>
                                    <h4>Global Operations</h4>
                                    <h5>Data Scientist - Churm Prediction</h5>
                                    <span>
                                        <h6>
                                            Time series analysis and causal inference in the churn index.
                                        </h6>
                                        <h6>
                                            Use of Machine learning algorithms (ARIMA + Random Forest) to predict
                                            
                                        </h6>
                                        <h6>the number of customers susceptible to cancel the subscription in
                                            Telefónica Colombia
                                        </h6>
                                    </span>
                                </div>
                            </div>                         
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row'>
                            <div className='col-3'>
                            <img src={experis} 
                                    className='float-end  mx-auto d-none d-md-block' 
                                    alt='Experis'
                                    style={{witdh:'150px', height:'150px'}}
                                    />
                            </div>
                            <div className='col-8'>
                                <img src={telefonica} 
                                        className='float-start  mx-auto d-none d-md-block' 
                                        alt='Telefónica'
                                        style={{witdh:'600px', height:'500px'}}
                                        />
                                <div className='carousel-caption d-none d-md-block' style={{marginTop: '15px', color: 'whitesmoke'}}>
                                    <h4>Global Operations</h4>
                                    <h5>Data Scientist - Mobile Network</h5>
                                    <span>
                                        <h6>
                                        Issues Prediction in the mobile network using deep learning algorithms
                                        (Autoencoders + XGBOOST).
                                        </h6>
                                    </span>
                                </div>
                            </div>                         
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='row'>
                            <div className='col-3'>
                            <img src={saptools} 
                                    className='float-end rounded-circle mx-auto d-none d-md-block' 
                                    alt='Saptools'
                                    style={{witdh:'150px', height:'150px'}}
                                    />
                            </div>
                            <div className='col-6'>
                                <img src={nestle} 
                                        className='float-center  mx-auto d-none d-md-block' 
                                        alt='Nestle'
                                        style={{witdh:'300px', height:'500px'}}
                                        />
                                <div className='carousel-caption d-none d-md-block' style={{marginTop: '15px', color: 'black'}}>
                                    <h4>E-commerce</h4>
                                    <h5>Data Scientist - Pormotional event analysis</h5>
                                    <span>
                                        <h6>
                                        Time series analysis and causal impact of promotional events.
                                        </h6>
                                    </span>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    )
}
