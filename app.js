const fs = require('fs').promises
const path = require('path')
//Needed imports
const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')

// Set the port
// Port number allocation
const port = process.env.PORT || 3000
// Boot the app
const app = express()
@@ -12,7 +17,7 @@ app.use(express.static(__dirname + '/public'));
app.get('/products', listProducts)
app.get('/', handleRoot);
// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))
app.listen(port, () => console.log(Server listening on port ${port}))