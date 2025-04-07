const express = require('express')
const router = express.Router()
const axios = require('axios')

let count
// get data using axios
axios.get('https://api.sampleapis.com/cartoons/cartoons3D')
    .then(res => count = res.data.length)

// localhost:3000/cartoons3D
router.get('/', (req, res)=> {

    // get the url
    const url = 'https://api.sampleapis.com/cartoons/cartoons3D'

    axios.get(url).then(response => {
    
        res.render('pages/cartoons', {
            title: '3D Cartoons',
            name: '3D Cartoons',
            data: response.data,
            path: 'cartoons3d'
        })
    })
})

// single page
// localhost:3000/cartoons3d/id
router.get('/:id', (req, res)=> {
    const id = req.params.id 

    const url = `https://api.sampleapis.com/cartoons/cartoons3D/${id}`

    axios.get(url).then(resp => {
        
        const data = resp.data
        res.render('pages/cartoonSingle', {
            title: data.title,
            name: data.title,
            data: data,
            path: 'cartoons3d',
            count
        })
    })
})

module.exports = router