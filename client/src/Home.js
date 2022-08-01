import React from 'react';
import NavBar from './NavBar';

function Home(){
    return(
        <div className='homeimg' style={{
            backgroundImage: `url('https://i.imgur.com/msY1hKt.jpg')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            width: '500%',
            height: '800px',

          }}>

            <div className='page-title'>
              <div className='typetext'>
              Save Lives
              <br></br>
              Carry Narcan
              </div>
              </div>
          </div>

    )
}

export default Home;