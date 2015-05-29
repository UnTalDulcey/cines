var express = require('express');
var router = express.Router();
var logger = require('../logger');
var peliculas = require('../models/peliculas');
var cines = require('../models/cines');
var sequelize = require('../db');
var crearcines = require("../crearcines")

//conexion ok
//
// sequelize.sequelize.authenticate().then(function(err) {
//     console.log('Connection has been established successfully.');
//   }, function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

//generar base de datos
// sequelize.sequelize
//   .sync({ force: true })
//   .then(function(err) {
//     console.log('It worked!');
//   }, function (err) {
//     console.log('An error occurred while creating the table:', err);
//   });



router.get('/', function(req, res, next) {
  //mostramos todas las ciudades
  res.send('hola mundo');
});

//CINES
router.get('/cines', function(req, res, next) {
  //mostramos todas las ciudades





  cines.all().then(function(projects) {
    res.status(200).jsonp(projects)
  })
});

router.get("/crear/cine", function(req, res){
    res.render("addCine",{
			title : "Formulario para crear cines",
		});
});

router.post("/crear/cine", function(req,res)
{
	//creamos un objeto con los datos a insertar del usuario
  cines.create({ name: req.body.nombre,
                address:req.body.direccion,
                phone:req.body.telefono,
                city:req.body.ciudad,
                url:req.body.url,
                logo:req.body.logo})
  .then(function() {
      console.log('It worked!');
      res.redirect('/')
  }, function (err) {
      console.log('An error occurred while creating the table:', err);
  });
});


//PELICULAS
router.get('/peliculas', function(req, res, next) {
  //mostramos todas las ciudades
  peliculas.all().then(function(projects) {
    res.status(200).jsonp(projects)
  })
});

router.get('/peliculas/:id', function(req, res) {
  var f = new Date();
  var fecha = f.getFullYear()+'-'+(f.getMonth()+1)+'-'+f.getDate();
  peliculas.findAll({ where: { cineId: req.params.id,day:fecha } }).then(function(projects) {
    res.status(200).jsonp(projects)
  })
});

router.get("/crear/pelicula", function(req, res){
  cines.all().then(function(data) {
    var f = new Date();
    var fecha = f.getFullYear()+'-'+(f.getMonth()+1)+'-'+f.getDate();
    for(var i=0;i<data.length;i++){
      // logger.info(data[i].dataValues.url)
      crearcines(data[i].dataValues.url,data[i].dataValues.id,fecha);
    }
    res.send('se guardo '+ fecha)
  });
});

// router.post("/crear/pelicula", function(req,res)
// {
// 	//creamos un objeto con los datos a insertar del usuario
//
// });

// //FUNCIONES
// router.get('/funciones', function(req, res, next) {
//   //mostramos todas las ciudades
//   funciones.all().then(function(projects) {
//     res.status(200).json(projects)
//   })
// });
//
// router.get("/crear/funcion", function(req, res){
//   peliculas.all().then(function(data) {
//     for(var i=0;i<data.length;i++){
//       //logger.info(data[i].dataValues.cineId)
//       crearfunciones(data[i].dataValues.id,data[i].dataValues.cineId);
//     }
//     res.send('se guardo')
//   });
// });
//
// router.post("/crear/funcion", function(req,res){
// 	//creamos un objeto con los datos a insertar del usuario
//   funciones.create({ hour: req.body.hora,
//                 day:req.body.dia,
//                 cineId:req.body.cine,
//                 peliculaId:req.body.pelicula,
//                   })
//   .then(function(err) {
//       console.log('It worked!');
//       res.redirect('/')
//   }, function (err) {
//       console.log('An error occurred while creating the table:', err);
//   });
// });

module.exports = router;
