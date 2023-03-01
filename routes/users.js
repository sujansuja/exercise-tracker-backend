const express = require('express')
const router = express.Router()

let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    console.log(req.body)
    const { username } = req.body;

    const newUser = new User({ username })

    newUser.save()
        .then(() => res.json('user added'))
        .catch((err) => res.status(400).json('Error:' + err))
})


module.exports = router;