import React from 'react'
import PropTypes from 'prop-types';
import ml from '../images/machine-learning.svg'

const Ml = ({ fun }) =>{
      
    return (
       
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card" 
                        style={{backgroundColor: '#282c34'}}>
                        <h3 className="card-title"
                            style={{color: 'whitesmoke'}}>
                            Machine Learning
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
                             style={{backgroundColor: '#282c34'}}>
                            <div className="card-body">
                                <h5 className="card-title">Programming Languages</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                         role="progressbar" 
                                         aria-valuenow="95" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '95%'}}>
                                        Python
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                         role="progressbar" 
                                         aria-valuenow="75" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '75%'}}>
                                        R
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                         role="progressbar" 
                                         aria-valuenow="85" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '85%'}}>
                                        SQL
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                                         role="progressbar" 
                                         aria-valuenow="50" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '50%'}}>
                                        Java Script and React Js
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" 
                                         role="progressbar" 
                                         aria-valuenow="30" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '30%'}}>
                                        C#-Unity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100"
                             style={{backgroundColor: '#282c34'}}>
                            <div className="card-body">
                                <h5 className="card-title">ML Techniques</h5>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                         role="progressbar" 
                                         aria-valuenow="85" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '85%'}}>
                                        Reinforcement Learning
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                         role="progressbar" 
                                         aria-valuenow="80" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '80%'}}>
                                        Deep Learning
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                         role="progressbar" 
                                         aria-valuenow="75" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '75%'}}>
                                        Time Series analysis and Forecasting
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                         role="progressbar" 
                                         aria-valuenow="60" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '60%'}}>
                                        Unsupervised Learning
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '10px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                                         role="progressbar" 
                                         aria-valuenow="50" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style={{width: '50%'}}>
                                        Natural Languages Processing (NLP)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" 
                             style={{backgroundColor: '#282c34'}}>
                        <div className="card-body">
                            <h5 className="card-title">Cloud Plataforms and Deployments Tools</h5>
                                <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="60" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '60%'}}>
                                          Amazon Web Services
                                        </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="50" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '50%'}}>
                                        Google Coud
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="70" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '70%'}}>
                                        Docker
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" 
                                            role="progressbar" 
                                            aria-valuenow="40" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '40%'}}>
                                        Kubernetes
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
     
    )
  }

  Ml.propTypes = {
    fun: PropTypes.func.isRequired
};

export default Ml;