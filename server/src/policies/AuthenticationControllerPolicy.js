const Joi = require('joi')

module.exports = {
	register (req, res, next) {
		const schema = {
			email: Joi.string().email(),
			password: Joi.string().regex(
				new RegExp('^[a-zA-Z0-9]{8,32}$')
			)
		}

		const {error, value} = Joi.validate(req.body, schema)
		if (error) {
			switch (error.details[0].context.key) {
				case 'email':
					res.status(400).send({
						error: 'Invalid email'
					})
					break;
				case 'password':
					res.status(400).send({
						error: `Password must be
							<br>1) A-Z and 0-9
							<br>2) 8 to 32 character
						`
					})
					break
				default:
					res.status(400).send({
						error: 'Invalid registration'
					})
			}
		} else {
			next()
		}

	}
}
