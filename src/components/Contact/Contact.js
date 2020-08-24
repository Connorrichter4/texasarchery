import React, { useState, } from 'react';
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
		background: 'white',
		borderRadius: '5px',
		boxShadow: '5px 5px 20px black',
	},
}));

function Contact() {
	const classes = useStyles();

	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleChange = (event) => {
		event.persist();
		setContact({...contact, [event.target.name]: event.target.value});
	}

	return (
		<div className='contact-us'>
			<form className={classes.root} noValidate autoComplete='off'>
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
					onChange={handleChange}
					
				/>
				<TextField
					id='filled-basic'
					label='Email'
					name='email'
					variant='filled'
					required
					fullWidth
					onChange={handleChange}
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
					onChange={handleChange}
				/>
				<Button>Submit</Button>
			</form>
		</div>
	);
}

export default Contact;
