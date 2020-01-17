const express = require('express');
const router = express.Router();
const parse = require('./parse.js');
const { Application } = require('../models/');
const { Feature } = require('../models/');
// const db = require('../models/');
// console.log(db.ModelName)
// const ModelName = require('../models/').ModelName;
// console.log(ModelName);



router.get('/', (req,res) => {
    console.log('— GET —')
    
    Application
    .findAll({
        include: [Feature]
    })
    .then( data => {
        // console.log(data)
        let data_list = parse.captureData(data);
        res.send(data_list)
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
})

router.post('/add/app', (req,res) => {
    console.log('— POST app —')
    console.log(req.body)

    Application
    .create(req.body)
    .then( app => {
        res.redirect('/')
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
})

router.post('/add/feat/:app_id', (req,res) => {
    console.log('— POST feat —')
    
    console.log(req.body)

    Feature
    .create({
        ...req.body,
        ApplicationId: req.params.app_id
    })
    .then( feat => {
        res.redirect('/')
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
})



module.exports = router;