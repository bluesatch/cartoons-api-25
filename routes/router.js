const express = require('express')
const router = express.Router()
const axios = require('axios')

router.use(express.static('public'))

const twoDRoutes = require('./api/2dRoutes')
router.use('/cartoons2d', twoDRoutes)

const threeDRoutes = require('./api/3dRoutes')
router.use('/cartoons3d', threeDRoutes)

// home page
router.get('/', (req, res)=> {
    let randomCartoon

    axios.get('https://api.sampleapis.com/cartoons/cartoons2D/')
        .then(resp => {

            randomCartoon = resp.data[Math.floor(Math.random() * resp.data.length)]
            res.render('pages/home', {
                title: 'My Cartoons Website',
                name: 'Cartoons',
                cartoon: randomCartoon
            })
        })

})

module.exports = router