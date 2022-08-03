import React from 'react';
import NavBar from './NavBar';
import { Slide } from "react-awesome-reveal";

function Home(){
    return(
        <div className='homeimg' style={{
            backgroundImage: `url('https://i.imgur.com/MfunWH6.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
          }}>
            
            <div className='page-title'>
              <div className='typetext'>
              <h2>Save Lives</h2>
              <h2>Carry Narcan</h2>
              </div>
              
              </div>
          </div>

    )
}

export default Home;