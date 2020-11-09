var express = require('express');
var app = express(); 
const path = require('path');
//assuming app is express Object.
app.get('/api', function(req,res) {
 res.sendFile('/workspace/tecnologia2020/EXPRESS_STATIC_FILE/' ,'index.html');
});

app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname ,'about.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/sitemap', function(req,res) {
 res.sendFile(path.join(__dirname,'sitemap.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
