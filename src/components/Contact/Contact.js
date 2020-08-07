import React from 'react';
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

	return (
		<div className='contact-us'>
			<form className={classes.root} noValidate autoComplete='off'>
				<h2>Contact Us:</h2>
				<TextField
					id='filled-basic'
					label='Name'
					variant='filled'
					required
					style={{ margin: 8 }}
					margin='normal'
					fullWidth
				/>
				<TextField
					id='filled-basic'
					label='Email'
					variant='filled'
					required
					fullWidth
				/>
				<TextField
					id='filled-basic'
					label='Message'
					variant='filled'
					required
					multiline
					rows={4}
					fullWidth
				/>
				<Button>Submit</Button>
			</form>
		</div>
	);
}

export default Contact;
