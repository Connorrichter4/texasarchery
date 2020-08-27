import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const questions = [
	{
		ques: '+ What do I need for my first visit?',
		ans:
			'Nothing! We will provide you with all the equipment you need and basic instructions to get you shooting in no time.',
	},
	{
		ques: '+ Do I need to schedule a time?',
		ans:
			'Nope! Come in anytime we are open. Members get extended access to the shooters club area.',
	},
	{
		ques: '+ Do I need my own equipment?',
		ans:
			'Nope! We will provide access to training bows. If you are bringing your own equipment please make sure you bring everything you need as we cannot lend out arrows for your bow.',
	},
];

function FirstVisit() {
	return (
		<div>
			<h3>Things to know before you arrive</h3>
			<h4>COVID-19 Update: Masks are required when not shooting</h4>
			<div>
				<Accordion defaultActiveKey='0'>
					{questions.map((question, index) => {
						return (
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey={index + 1}>
									{question.ques}
								</Accordion.Toggle>
								<Accordion.Collapse eventKey={index + 1}>
									<Card.Body>{question.ans}</Card.Body>
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
