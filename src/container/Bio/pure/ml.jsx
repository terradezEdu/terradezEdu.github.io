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
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" 
                             style={{backgroundColor: '#282c34'}}>
                        <div className="card-body">
                            <h5 className="card-title">ML Frameworks and Utilities</h5>
                                <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="100" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '100%'}}>
                                            Scikit-Learn
                                        </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="100" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '100%'}}>
                                        Pandas
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="100" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '100%'}}>
                                        Numpy
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="95" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '100%'}}>
                                        StatsModels
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="95" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '95%'}}>
                                        Caret
                                    </div>
                                </div>
                                <div className="progress" style={{marginTop: '5px'}}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="95" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: '95%'}}>
                                        Tidyverse
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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