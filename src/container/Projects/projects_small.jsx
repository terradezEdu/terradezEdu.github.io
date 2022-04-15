import React from 'react';
import telefonica from './images/telefonica_logo.webp'
import nestle from './images/Nestle.jpg'
import './projects.css'

export default function ProjectsS() {

    return (
        <div id='projects' className='text-center'
             style={{backgroundColor: 'white', padding:'0px'}}>
             
            <div className='text-center border-5 border-dark'
                  style={{backgroundColor: 'rgb(152 158 169)'}}>
                    <span className='project'> Projects</span> 
            </div>
            
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className='col'>
                    <div className='card'>
                    <img src={telefonica} className='card-img-top' alt='telefonica' />
                    <div className='card-body'>
                        <h5 className='card-title'>Customer Experience</h5>
                        <p className='card-text'>
                            Deploy Deep learning model (XGBOOST) to measure the customer
                            satisfaction in Chile, Brazil and Unite Kingdom
                            Crowd sourcing data analysis to identify weak points in the mobile
                            network
                        </p>
                    </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={telefonica} className='card-img-top' alt='telefonica' />
                        <div className='card-body'>
                            <h5 className='card-title'>Churn Prediction</h5>
                            <p className='card-text'>
                                Using Machine learning algorithms (ARIMA + Random Forest) to predict
                                the number of customers susceptible to cancel the subscription in
                                Telefónica Colombia
                                Time series analysis and causal inference in the churn index
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={telefonica} className='card-img-top' alt='telefonica' />
                        <div className='card-body'>
                            <h5 className='card-title'>Mobile Network</h5>
                            <p className='card-text'>
                                Issues Prediction in the mobile network using deep learning algorithms
                                (Autoencoders + XGBOOST)
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                        <img src={nestle} className='card-img-top' alt='nestle' />
                        <div className='card-body'>
                            <h5 className='card-title'>e-commerce</h5>
                            <p className='card-text'>
                                Time series analysis and causal impact of promotional events
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
