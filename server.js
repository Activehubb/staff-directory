const express = require('express');
const app = express();
const DB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(morgan('combined'));
app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);



// Admin routes
app.use('/api/admin/admin', require('./routes/api/admin/admin'));
app.use('/api/admin/auth', require('./routes/api/admin/auth'));

// Center Routes
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 4400;

DB();

app.listen(PORT, () => {
	console.log(`Server connected on PORT ${PORT}`);
});
