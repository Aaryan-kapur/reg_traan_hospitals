const express = require('express')
const app = express()
const port = 8080

const db = require('./db')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


app.post('/register-hospital', (req, res) => {
    console.log(req.body)
    let data = db.hospital(req.body)
    data.save().then(item => {
        res.redirect('/success');
        console.log("Item saved to database!")
    })
    .catch(err => {
        res.status(400).send("unable to save to database")
        console.log(err.message)
    })
})

app.use('/register-hospital', express.static('register-hospital/'))
app.use('/success',express.static('success'))

app.listen(port, () => console.log(`Listening on port ${port}`))