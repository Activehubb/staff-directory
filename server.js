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
app.use('/api/center/user', require('./routes/api/center/user'));
app.use('/api/center/auth', require('./routes/api/center/auth'));
app.use('/api/center/profile', require('./routes/api/center/profile'))


const PORT = process.env.PORT || 4400;

DB();

app.listen(PORT, () => {
	console.log(`Server connected on PORT ${PORT}`);
});
