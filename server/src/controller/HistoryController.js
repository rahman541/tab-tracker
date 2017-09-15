const {Song, History} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query

      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song, history
        ))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured.'
      })
    }
  },

  async post (req, res) {
    try {
      const {songId, userId} = req.body.params

      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.status(201).send(history)
    } catch (err) {
      res.status(500).send({
        error: 'An internal error has occured.'
      })
    }
  }
}
