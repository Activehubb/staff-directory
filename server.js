const express = require('express');
const app = express();
const DB = require('./config/db')
const morgan = require('morgan')


app.use(express.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
	res.send('start')
})

// Admin routes
app.use('/api/admin/admin', require('./routes/api/admin/admin'))
app.use('/api/admin/auth', require('./routes/api/admin/auth'))

// Center Routes
app.use('/api/user/user', require('./routes/api/user/user'));
app.use('/api/user/auth', require('./routes/api/user/auth'));
app.use('/api/user/profile', require('./routes/api/user/profile'))


const PORT = process.env.PORT || 4400;

DB();

app.listen(PORT, () => {
	console.log(`Server connected on PORT ${PORT}`);
});
