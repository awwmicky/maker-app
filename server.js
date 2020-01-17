const express = require('express');
const app = express();



app.use( express.urlencoded({ extended : true }) )
app.use( express.json() )
app.use( express.static('./public/') )



const hbs = require('./views/hbs-engine/hbs.js');
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')



const apiRoutes = require('./controllers/apiRoutes.js');
const clientRoutes = require('./controllers/clientRoutes.js');
app.use('/api', apiRoutes)
app.use('/', clientRoutes)


// i am an idiot, what a i doing?
// i love klarence
// i want to date clarence

const PORT = 5000;
const db = require('./models/');

db.sequelize.authenticate()
.then( _ => console.log('Database Connected — ✓') )
.catch( err => console.log(`Err: ${err}`) )

db.sequelize.sync().then( _ => {
    app.listen(PORT, _ => {
        console.log(
            `Test Server — http://localhost:${PORT}`
        )
    })
})