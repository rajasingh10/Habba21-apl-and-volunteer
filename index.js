const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const morgan = require('morgan');   
const path = require('path')



const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true, limit: '50mb',}));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }))

// ROUTES
app.use('/pdf' , require('./server/Routes/pdfCreation'))
app.use('/api' , require('./server/Routes/volunteer'))








//Serve react client app to production
if (
    process.env.NODE_ENV === 'staging' ||
    process.env.NODE_ENV === 'production'
  ) {
    app.use(express.static(`${__dirname}/../client/build`));
  
    app.use('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }
  
//


app.listen(port, () => console.log(`Listening on port ${port}`));