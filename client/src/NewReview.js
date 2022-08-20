import React, { useState } from "react";

function NewReview({ handleNewReview }) {
    const [formState, setFormState] = useState({
        review: '',
    })

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        fetch('/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(formState),
        })
        .then((r) => r.json())
            .then((newReview) => handleNewReview(newReview));
        }

    return (

        <form className="new-review-form" 
        onSubmit={handleSubmit}>
            <textarea type="text" id="review" placeholder="Review This Location" rows={10} value={formState.entry} onChange={handleChange} />
            <input type="submit" id="submit" value="Submit" />

        </form>
    )
  
}

export default NewReview;