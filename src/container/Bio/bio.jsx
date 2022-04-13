import React, {useState} from 'react'
import Menu from './pure/menu'
import About from './pure/about'
import Ml from './pure/ml';
import PersonalProjects from './pure/personalProjects';

export default function Bio() {

  const [componentShow, setcomponentShow] = useState('menu');

  function changeComponent (comp) {
      setcomponentShow(comp);
  }

  return (
    <div className='container d-flex' style={{marginTop: '15px', padding: '0%'}}>
      {(() => {
          switch (componentShow) {

            case 'menu':

                return (
                  <Menu fun={changeComponent}></Menu>
                )

            case 'about':

                return (
                  <About fun={changeComponent}></About>
                )
            
            case 'ml':

                return (
                  <Ml fun={changeComponent}></Ml>
                )
            case 'pproject':

                return (
                  <PersonalProjects fun={changeComponent}></PersonalProjects>
                )

            default:

                return (
                  <Menu></Menu>
                )
          }
      })()
    }
    </div>
   
  )
}