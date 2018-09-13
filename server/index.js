const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, '../interface/dist')))

app.all('*', (req, res) => res.send(`
  <!DOCTYPE html>
  <html>
    <head>
        <title>Overlay</title>
    </head>
    <body>
        <div id="host"></div>
        <script src="/overlay.js"></script>
    </body>
  </html>
`))

app.listen(3000, () => console.log('ready on 3000'))
