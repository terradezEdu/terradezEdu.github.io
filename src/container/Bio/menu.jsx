import React from 'react'
import PropTypes from 'prop-types';
import avatar from '../Home/images/avatar.svg';
import ml from './images/machine-learning.svg'
import gear from './images/gears.png'

const Menu = ({ fun}) =>{
  return (
    <div className='container-fluid' id='bio'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card" 
                style={{backgroundColor: '#282c34'}}>
              <h3 className="card-title"
                  style={{color: 'whitesmoke'}}>About Me!
              </h3>
              <img src={avatar} 
                    className='img-fluid rounded-circle  center mx-auto d-block' 
                    alt='avatar'
                    style={{maxWidth: '15%'}}
              />
                <div className="card-body">
                  <p style={{color: 'whitesmoke'}}>
                    I am a mathematician and data science lover, especially in Deep Reinforcement Learning and
                    videogames. 
                  </p>
                  <button onClick={() => fun('about')} className="btn btn-primary">More info</button>
                </div>
          </div>
        </div>
        <div className="col">
          <div className="card" 
              style={{backgroundColor: '#282c34'}}>
            <h3 className="card-title"
              style={{color: 'whitesmoke'}}>Machine Learning</h3>
            <img src={ml}
                className='img-fluid   center mx-auto d-block' 
                alt='ml'
                style={{maxWidth: '25%'}}
                />
            <div className="card-body">
              <p style={{color: 'whitesmoke'}}>
              I have  deploying machine learning models in different areas such as customer experience, marketing, demand planning,
              mobile networks and energy markets 
              </p>
              <button onClick={() => fun('ml')} className="btn btn-primary"> ML Skills</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card"
              style={{backgroundColor: '#282c34'}}>
            <h3 className="card-title"
              style={{color: 'whitesmoke'}}>Personal Projects</h3>
            <img src={gear}
                className='img-fluid   center mx-auto d-block' 
                alt='projects'
                style={{maxWidth: '16%'}}
                />
            <div className="card-body">
              <p style={{color: 'whitesmoke'}}>
                I am a mathematician and data science lover, especially in Deep Reinforcement Learning and
                videogames. 
              </p>
              <button onClick={() => fun('pproject')} className="btn btn-primary">Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Menu.propTypes = {
  fun: PropTypes.func.isRequired
};

export default Menu;