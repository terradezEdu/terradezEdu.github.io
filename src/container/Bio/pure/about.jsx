import React from 'react'
import PropTypes from 'prop-types';
import avatar from '../../Home/images/avatar.svg'
import uv from '../images/uv_logo.svg'
import uoc from '../images/uoc_new.png'

const About = ({ fun }) =>{
      
    return (
       
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card" 
                        style={{backgroundColor: '#282c34'}}>
                        <h3 className="card-title"
                            style={{color: 'whitesmoke'}}>
                            About Me
                        </h3>
                        <img src={avatar} 
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
                <div className="accordion accordion-flush" id="accordionFlushExample">
                
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" 
                                type="button" data-bs-toggle="collapse" 
                                data-bs-target="#flush-collapseOne" 
                                aria-expanded="false" 
                                aria-controls="flush-collapseOne"
                                style={{backgroundColor: '#1d1f20d6', marginTop:'30px', color: 'whitesmoke'}}>
                            <i className="bi bi-book-fill" style={{fontSize: '2rem'}}>
                            </i>
                            <h6 style={{marginLeft: '8px'}}>Education</h6>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"
                            style={{backgroundColor: '#282c34', color: 'whitesmoke'}}>
                                <ul>
                                <li style={{padding: '20px'}}>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                        <p className="text-start">Bachelor's degree in Mathematics</p>
                                        </div>
                                        <div className="flex-shrink-0" style={{marginLeft: '30px'}}>
                                            <img src={uv} 
                                                 className='rounded-circle' 
                                                 alt="uv logo" 
                                                 style={{backgroundColor: 'white', width:'60px', height:'60px'}}/>
                                        </div>
                                    </div>
                                </li>

                                    <li style={{padding: '20px'}}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <p className="text-start">Master's degree in Data Science</p>
                                            </div>
                                            <div className="flex-shrink-0" style={{marginLeft: '30px'}}>
                                                <img src={uoc}  
                                                    alt="uv logo" 
                                                    style={{backgroundColor: 'white'}}/>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{padding: '20px'}}>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <p className="text-start">PhD student Information Technologies, Communications and Computing</p>
                                            </div>
                                            <div className="flex-shrink-0" style={{marginLeft: '30px'}}>
                                                <img src={uv} 
                                                    className='rounded-circle' 
                                                    alt="uv logo" 
                                                    style={{backgroundColor: 'white', width:'60px', height:'60px'}}/>
                                            </div>
        
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#flush-collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="flush-collapseTwo"
                            style={{backgroundColor: '#1d1f20d6', color: 'whitesmoke'}}
                            >
                        <i className="bi bi-translate" style={{fontSize: '2rem'}}></i>
                        <h6 style={{marginLeft: '8px'}}>languages</h6>
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"
                         style={{backgroundColor: '#282c34'}}>
                         <ul>
                                <li style={{padding: '10px'}}>
                                    <div className="d-flex align-items-left">
                                        <div className="flex-shrink-0">
                                            <h6 style={{color:'whitesmoke'}}>Spanish: </h6>
                                        </div>
                                        <div className="d-flex align-items-left" style={{marginLeft: '15px'}}>
                                        <span>
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i> 
                                        </span>
                                        </div>
                                    </div>
                                </li>
                                <li style={{padding: '10px'}}>
                                    <div className="d-flex align-items-left">
                                        <div className="flex-shrink-0">
                                            <h6 style={{color:'whitesmoke'}}>English: </h6>
                                        </div>
                                        <div className="d-flex align-items-left" style={{marginLeft: '15px'}}>
                                        <span>
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'white'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'white'}}></i> 
                                        </span>
                                        </div>
                                        </div>
                                </li>
                                <li style={{padding: '10px'}}>
                                    <div className="d-flex align-items-left">
                                        <div className="flex-shrink-0">
                                            <h6 style={{color:'whitesmoke'}}>French: </h6>
                                        </div>
                                        <div className="d-flex align-items-left" style={{marginLeft: '15px'}}>
                                        <span>
                                            <i className="bi bi-star-fill" style={{color: 'yellow'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'white'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'white'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'white'}}></i>  
                                            <i className="bi bi-star-fill" style={{color: 'white'}}></i> 
                                        </span>
                                        </div>
                                        </div>
                                </li>

                                </ul>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
     
    )
  }

  About.propTypes = {
    fun: PropTypes.func.isRequired
};

export default About;
