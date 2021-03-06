var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
const uri = 'mongodb+srv://Fiorito:Mi211002@fiorito.ewm2z.mongodb.net/Fiorito?retryWrites=true&w=majority'
/* GET users listing. */
router.get('/', function (req, res, next) {
    const uri = 'mongodb+srv://Fiorito:Mi211002@fiorito.ewm2z.mongodb.net/Fiorito?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
    res.send('respond with a resource');
});

router.get('/actors/:act', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    act = req.params.act;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(founfAct)
           function foundAct(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find({cast:{$in : [`${act}`]}}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
    });

router.get('/length_year/:length/:year', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let length = parseInt(req.params.length);
    let year = parseInt(req.params.year);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(foundYear)
            function foundYear(err){
            if (err) console.log("connesione al db non riuscita");
            else{
                const collection = client.db("sample_mflix").collection("movies");
                collection.find({$and:[{runtime:l},{year:y}]}).toArray(callBackQuery);
            }

        }  
        function callBackQuery(err, result){
            if (err) console.log(err.message);
            else res.send(result);
            client.close();
        }
    });
  

module.exports = router;