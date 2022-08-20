import React from 'react';
import ReviewCard from './ReviewCard'

function Reviews( {reviews}){
    return (
        <div className="reviews-container">
            {reviews.map((writereview) => (
                <div key={writereview.id}>
                    <ReviewCard 
                    writereview={writereview} 
                    />
                     <div className='comment-container'>
            <div>
                <h3>Username</h3>
                <p>Comment Here</p>
            </div>
      </div>
                </div>
                
            ))}
        </div>
    )

}

export default Reviews;