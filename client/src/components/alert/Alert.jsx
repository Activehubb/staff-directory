import { Button, Container } from '@material-ui/core';
import { AlertTitle } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Alert({statusText, data , status}) {
  return (
		<div>
			<Container maxWidth={'sm'} style={{ marginTop: '3rem' }}>
				<Alert severity='error'>
					<AlertTitle>{statusText}</AlertTitle>
					{data}
					<Button variant='outlined' color='error'>
						<Link
							to='/signin'
							style={{
								textDecoration: 'none',
								color: 'rgba(255,0,0, 0.8)',
								fontWeight: '700',
							}}
						>
							Sign In
						</Link>
					</Button>
				</Alert>
			</Container>
		</div>
	);
}
