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
    console.log('— Home Page —')

    Application
    .findAll({
        include: [Feature]
    })
    .then( data => {
        console.log('— GET —')
        // console.log(data)
        let app_list = parse.captureData(data);
        console.table(
            app_list,
            [
                'id', 'name', 'Features'
            ]
        )
        console.log(app_list[0].Features)
        // let feat_list = parse.captureData(app_list.Feature);
        // console.log(
            // feat_list
            // [
            //     id
            // ]
        // )

        res.render(
            'home.hbs',
            {
                title: 'Home Page',
                style: 'home.css',
                script: 'home.js',
                data_list: app_list
            }
        )
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
})

router.get('/feature', (req,res) => {
    console.log('— Feature Page —')
    
    res.render(
        'feature.hbs',
        {
            title: 'Feature Page',
            style: 'feature.css',
            script: 'feature.js',
            // data_list: data_list
        }
    )
})

router.get('/add', (req,res) => {
    console.log('— Add Page —')

    res.render(
        'add.hbs',
        {
            title: 'Add Page',
            style: 'add.css',
            script: 'add.js',
            // data_list: data_list
        }
    )
})



module.exports = router;