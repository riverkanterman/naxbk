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
    if ( current === 0 ) return
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
        <div className='box'>
        <h3>A Brief Guide on How to Administer Naloxone</h3>
        </div>

          <div className='box'>
            <p className='center'>Check to see if the person is unconscious, not breathing or breathing abnormally, or if they have blue lips, nails, or skin color - if so, they may have overdosed.
            You can check to see if someone is conscious by rubbing your knuckles against their sternum.</p>
          </div>


          <div className='box'>
            <p className='center'>Calling 911 is strongly suggested - however it is important to know your rights before you do so. The person overdosing and the person calling 911 are protected under Good Samaritan Law, others are not.  Please note that the law does not address issues such as open warrants, probation or parole violations, immigration, house, and child welfare. However, it does protect possession marijuana (any amount), alcohol (for underage drinkers), drug paraphernalia, and other drugs up to 8 ounces.</p>
          </div>

          <div className='box'>
            <p className='center'>Naloxone is used for opiate overdose and will only work for opiate overdose, however it is not harmful for someone who has not used opiates. Administer naloxone if you suspect an overdose, even if you are not certain the person has used opiates.</p>
          </div>

          <div className='box'>
            <p className='center'>Naloxone can be administered nasally or intramuscularly, however nasal spray is what is most common and readily available. This tutorial will only be address how to administer naloxone nasally.</p>
          </div>

          <div className='box'>
            <p className='center'>If using nasal spray: remove from package, place tip of nozzle in one nostril until your fingers touch the bottom of their nose, press the plunger firmly.  If the person is not breathing do rescue breathing or CPR. If they are not responding after 2 minutes use the second dose of naloxone. Naloxone works for 30-90 minutes.</p>
          </div>

          <div className='box'>
            <p className='center'>Put a person in recovery position until help arrives, on their side with one arm supporting their head, knee bent to prevent rolling on stomach.</p>
          </div>
        </div>
      </div>
      <div className='button-1-container'>
        <div className='button-p' onClick={prev}>Previous</div>
        <div className='button-n' onClick={next}>Next</div>
      </div>
      <div className='button-2-container'> 
        {[0, 1, 2, 3, 4, 5, 6].map(num => (
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