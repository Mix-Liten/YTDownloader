const express = require('express')
const cors = require('cors')
const ytdl = require('ytdl-core')
const app = express()
app.use(cors())

app.listen(4000, () => {
  console.log('Server Works !!! At port 4000')
})

app.get('/mp4_download', (req, res) => {
  var ID = req.query.id

  ytdl.getInfo(ID, (err, info) => {
    if (err) throw err
    const {
      title
    } = info
    res.header('Content-Disposition', `attachment; filename="${encodeURIComponent(title)}.mp4"`)
    ytdl(ID).pipe(res)
  })
})

app.get('/mp3_download', (req, res) => {
  var ID = req.query.id

  ytdl.getInfo(ID, (err, info) => {
    if (err) throw err
    const {
      title
    } = info
    res.header('Content-Disposition', `attachment; filename="${encodeURIComponent(title)}.mp3"`)
    ytdl(ID, {
      quality: 'highestaudio'
    }).pipe(res)
  })
})