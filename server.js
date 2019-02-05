// Settings to setup auto deployment in Heroku

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/angular-demo'));

app.get('/*', function(req,res) {
    
  res.sendFile(path.join(__dirname,'/dist/your_app_name/index.html'));
  
});

app.listen(process.env.PORT || 8080);