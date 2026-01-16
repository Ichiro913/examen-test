// BASE SETUP
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// Configuration de l'app
app.use(morgan('dev')); // Log les requêtes dans la console

// Configuration du body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Port fixé sur 8080 pour correspondre aux consignes de l'examen (EC2 Security Group)
var port = 8080; 

// ROUTES POUR L'API
var router = express.Router();

// Middleware de log
router.use(function(req, res, next) {
    console.log('Requête reçue sur l’API.');
    next();
});

// Route de base : Hello World (GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Hello World! Bienvenue sur l’API Node 18' }); 
});

// Enregistrement des routes
app.use('/api', router);

// DÉMARRAGE DU SERVEUR
app.listen(port);
console.log('L’application tourne sur le port ' + port);