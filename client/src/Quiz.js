import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
    const questions = [
		{
			questionText: 'What type of overdose does Naloxone reverse?',
			answerOptions: [
				{ answerText: 'Stimulant', isCorrect: false },
				{ answerText: 'Alcohol', isCorrect: false },
				{ answerText: 'Opiate', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What is the method of administering Naloxone?',
			answerOptions: [
				{ answerText: 'Nasal Spray', isCorrect: false },
				{ answerText: 'Intramuscular Injection', isCorrect: false },
				{ answerText: 'Both', isCorrect: true },
			],
		},
		{
			questionText: 'Who does 911 Good Samaritan Law protect?',
			answerOptions: [
				{ answerText: 'The individual overdosing', isCorrect: false },
				{ answerText: 'The person who calls 911', isCorrect: false },
				{ answerText: 'Anyone present', isCorrect: false },
				{ answerText: 'A and B', isCorrect: true },
                { answerText: 'B and C', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What are the signs of opiod overdose?',
			answerOptions: [
				{ answerText: 'Loss of consciousness', isCorrect: false },
				{ answerText: 'Abnormal breathing', isCorrect: false },
				{ answerText: 'Blue lips, nails, or skin color', isCorrect: false },
				{ answerText: 'A and B', isCorrect: false },
                { answerText: 'B and C', isCorrect: false },
                { answerText: 'All of the above', isCorrect: true },
			],
		},
        {
			questionText: 'Can someone be given too much Naloxone?',
			answerOptions: [
				{ answerText: 'Yes, but only if they are on opiates', isCorrect: false },
				{ answerText: 'Yes, but only if they are on stimulants', isCorrect: false },
				{ answerText: 'Yes, regardless of substance', isCorrect: false },
				{ answerText: 'No', isCorrect: true },
			],
		},
        {
			questionText: 'How long should you wait between Naloxone doses if the person is unresponsive?',
			answerOptions: [
				{ answerText: '2 minutes', isCorrect: true },
				{ answerText: '15 minutes', isCorrect: false },
				{ answerText: '30 minutes', isCorrect: false },
				{ answerText: '1 hour', isCorrect: false },
			],
		},
        {
			questionText: 'What should you do after administering Naloxone?',
			answerOptions: [
				{ answerText: 'Rescue breathing', isCorrect: false },
				{ answerText: 'Place person in recovery position', isCorrect: false },
				{ answerText: 'Call 911', isCorrect: false },
				{ answerText: 'Give the person water', isCorrect: false },
                { answerText: 'A, B, and C', isCorrect: true },
                { answerText: 'All of the above', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButton = (isCorrect) => {
		if(isCorrect === true) {
			setScore(score +1);
		}

		const nextQuestion = currentQuestion +1;
		if(nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}else{
			setShowScore(true);
		}
	}

	const handleResetButton = (score) => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}

	return (
        <div className='quizimg' style={{
            backgroundImage: `url('https://i.imgur.com/MfunWH6.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            width: '100%',
            height: '650px',
			display: 'flex',
          }}>

		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button className="playbutton" onClick={() => handleResetButton(score)}>Play Again!</button></div>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='quiz-button' onClick={() => handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
	);
}

export default Quiz;