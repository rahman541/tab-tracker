const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// Seting up middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.get('/status', (req, res) => {
	res.send({
		message: 'Hello world'
	})
})

app.listen(process.env.PORT || 8080, () => {
	console.log('Server started at http://127.0.0.1:8080')
});
