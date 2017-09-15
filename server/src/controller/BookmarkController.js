const {Bookmark, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query

      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song, bookmark
        ))
      res.send(bookmarks)
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
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: songId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'You already have this set as a bookmark'
        })
      }

      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.status(201).send(newBookmark)
    } catch (err) {
      return res.status(500).send({
        error: 'An internal error has occured.'
      })
    }
  },

  async delete (req, res) {
    try {
      const {bookmarkId} = req.params

      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
        res.status(500).send({
        error: 'An error has occured.'
      })
    }
  }
}
