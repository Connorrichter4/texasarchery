import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '600px',
		margin: '1rem auto',
		padding: '1rem',
		height: '65vh',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#fffcf2',
		borderRadius: '5px',
		boxShadow: '5px 5px 20px black',
	},
}));

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const classes = useStyles();

	// const [contact, setContact] = useState({
	// 	name: '',
	// 	email: '',
	// 	message: '',
	// });

	// const [emailSent, setEmailSent] = useState(false);

	// const handleChange = (event) => {
	// 	event.persist();
	// 	setContact({ ...contact, [event.target.name]: event.target.value });
	// };

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// };

	return (
		<div className='contact-us'>
			<form
				className={classes.root}
				noValidate
				autoComplete='off'
				// onSubmit={handleSubmit}
				method='POST'
				action='/'
				data-netlify='true'>
				<h2>Contact Us:</h2>
				<TextField
					id='filled-basic'
					label='Name'
					name='name'
					variant='filled'
					required
					style={{ margin: 8 }}
					margin='normal'
					fullWidth
					// onChange={handleChange}
					// value={contact.name}
				/>
				<TextField
					id='filled-basic'
					label='Email'
					name='email'
					variant='filled'
					required
					fullWidth
					// onChange={handleChange}
					// value={contact.email}
				/>
				<TextField
					id='filled-basic'
					label='Message'
					name='message'
					variant='filled'
					required
					multiline
					rows={4}
					fullWidth
					// onChange={handleChange}
					// value={contact.message}
				/>

				<Button type='submit'>Submit</Button>
			</form>
		</div>
	);
}

export default Contact;
