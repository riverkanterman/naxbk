import React, {useRef, useState, useEffect} from 'react';
import './Tutorial.css';

function Tutorial() {
  const TOTAL_SLIDES = 6
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)

  const next = () => {
    if ( current >= TOTAL_SLIDES ) return
    else setCurrent(current + 1)
  }
  
  const prev = () => {
    if ( current === 1 ) return
    else setCurrent(current - 1)
  }
  
  const desired = e => {
    setCurrent(Number(e.target.id))
  }
  
  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out'
    ref.current.style.transform = `translateX(-${current}00%)`
  }, [current])

  return(
    <div className='tutimg' style={{
        backgroundImage: `url('https://i.imgur.com/MfunWH6.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}>
        <div className='wrapper'>
      <div className='frame'>
        <div className='box-container' ref={ref}>
        </div>
      </div>
      <div className='button-1-container'>
        <div className='button-p' onClick={prev}>Previous</div>
        <div className='button-n' onClick={next}>Next</div>
      </div>
      <div className='button-2-container'>
        {[1, 2, 3, 4, 5, 6].map(num => (
          <div
            className={`button-2 ${num === current && 'active'}`}
            onClick={desired}
            id={num}
            key={num}
          />
        ))}
      </div>
    </div>
    </div>)
}

export default Tutorial;