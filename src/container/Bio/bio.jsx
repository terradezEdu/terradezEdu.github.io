import React, {useState} from 'react'
import Menu from './pure/menu'
import About from './pure/about'

export default function Bio() {

  const [componentShow, setcomponentShow] = useState('menu');

  function changeComponent (comp) {
      setcomponentShow(comp);
  }

  return (
    <div className='container d-flex'>
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
                  <div>ML section</div>
                )
            case 'pproject':

                return (
                  <div>Personal Projects section</div>
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