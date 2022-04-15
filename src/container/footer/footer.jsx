import React, { useState, useEffect } from 'react'

export default function Footer() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <nav className='navbar navbar-dark bg-dark' style={{marginBottom: '5px'}}>
            <div className='container-fluid text-center'>
                {isDesktop ? (
                    <span style={{textAlign: 'center'}}>
                        <h5 style={{color:'whitesmoke', marginTop:'15px', marginLeft:'20px'}}>This template is available in my GitHub</h5>
                </span>
                    ) : (
                    <span></span>
                )}
                
                
                <div className='btn-group' role='group' aria-label='contacme' style={{marginRight: '50px'}}>
                    <h5 style={{color:'whitesmoke', marginTop:'15px'}}>Contact me:</h5>
                    <button type='button' className='btn btn-dark'>
                    <a href='https://github.com/terradezEdu'>
                        <i className='bi bi-github' style={{color:'pink', fontSize: '1.5rem'}}></i>
                    </a>
                       
                    </button>
                    <button type='button' className='btn btn-primary'>
                    <a href='https://www.linkedin.com/in/eduardoterradez/'>
                        <i className='bi bi-linkedin' style={{color:'white', fontSize: '1.5rem'}}></i>
                    </a>
                    </button>
                </div>
        
            </div>
        </nav> 
    )
}