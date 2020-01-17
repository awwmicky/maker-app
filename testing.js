// require('./models/') === db (obj)
const Application = require('./models/').Application;
const Feature = require('./models/').Feature;
const { Op } = require('./models/').Sequelize;
// console.log(Op);
const parse =require('./controllers/parse.js');



const db = require('./models/');
db.sequelize.sync().then( _ => {
/*  */
// viewAppStuff()
// viewFtStuff()
viewAllStuff()
// createStuff()
/*  */
}).catch( err => console.log(err) )



viewAppStuff = () => {
    Application
    .findAll({
        include: [Feature]
    })
    .then( app => {
        // console.log(app)
        console.log(app[0].dataValues);
        let data_list = parse.captureData(app);
        console.table(
            data_list, 
            [
                'id', 'name', 'Features'
            ]
        )
        // res.send(data_list)
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
};

viewFtStuff = () => {
    Feature
    .findAll({
        // include: [Feature]
    })
    .then( feat => {
        // console.log(feat)
        console.log(feat[0].dataValues)
        let data_list = parse.captureData(feat);
        console.table(
            data_list,
            [
                'id', 'name', 'type'
            ]
        )
        // res.send(data_list)
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
};

viewAllStuff = () => {
    Application
    .findAll({
        include: [Feature]
    })
    .then( data => {
        // console.table(data[0].dataValues)
        // let dataFt = data[0].dataValues.Features;
        // console.table(dataFt[0].dataValues);

        parse.captureAllData(data)
        // res.send(data_list)
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
};

createStuff = () => {
    console.log('— POST —')

    Application.create({
        name: 'Shop App'
    })
    .then( app => {
        console.log('✓')
        console.log(app.dataValues)
        
        app.createFeature({
            name: 'add food item',
            type: 'POST method'
        })
        .then( feat => {
            console.log('✓ ✓')
            console.log(feat.dataValues)
        })
        .catch( err => {
            console.log('× ×')
            console.log(err)
        })
    })
    .catch( err => {
        console.log('×')
        console.log(err)
    })
};