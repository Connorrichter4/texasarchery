import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './FirstVisit.css';

const questions = [
	{
		id: 0,
		ques: '+ What does a membership provide me access to?',
		ans: [
			'If you are a member, you have access to all of our indoor and outdoor locations as well as a 24 hour indoor shooters club area located at the Plano facility. There is no range fee, and you will have access to the training equipment provided by the range.',
		],
	},
	{
		id: 1,
		ques: '+ What do I need for my first visit?',
		ans: [
			'Nothing other than closed toe shoes! We will provide you with all the equipment and basic instructions to get you shooting in no time.',
		],
	},
	{
		id: 2,
		ques: '+ Do I need to schedule a time?',
		ans: [
			'Nope! Come in anytime we are open. Members get extended access to the shooters club area.',
		],
	},
	{
		id: 3,
		ques: '+ Do I need my own equipment?',
		ans: [
			'Nope! We will provide access to training bows. If you are bringing your own equipment please make sure you bring everything you need as we cannot lend out arrows for your bow.',
		],
	},
	{
		id: 4,
		ques: '+ How much does it cost?',
		ans: [
			'First Time Shooters',
			'It costs $20 per person for equipment and a quick lesson from one of our USA Archery certified instructors.',
			'Day Passes',
			'Day passes are $10 if you have your own equipment and $15 if you need to borrow equipment.',
			'Memberships',
			'Memberships are $120 per year for a single person and $220 per year for a family. ',
		],
	},
];

function FirstVisit() {
	return (
		<div className='faq-container'>
			<div className='first-visit-headers'>
				<h3>Things to know before you arrive!</h3>
				<h4>
					<span className='covid-update'>COVID-19 Update:</span> Masks are
					required when not shooting
				</h4>
			</div>
			<div>
				<Accordion defaultActiveKey='0' style={{ padding: '0 1rem 1rem' }}>
					{questions.map((question, index) => {
						return (
							<Card key={question.id} style={{ background: '#fffcf2' }}>
								<Accordion.Toggle as={Card.Header} eventKey={index + 1}>
									{question.ques}
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={index + 1}>
									<Card.Body>
										{question.ans.map((answer) => {
											return <p>{answer}</p>;
										})}
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						);
					})}
				</Accordion>
			</div>
		</div>
	);
}

export default FirstVisit;
