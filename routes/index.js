var express = require('express');
var router = express.Router();
var logger = require('../logger');
var peliculas = require('../models/peliculas');
var cines = require('../models/cines');
var funciones = require('../models/funciones');
var sequelize = require('../db');

//conexion ok
//
// sequelize.sequelize.authenticate().then(function(err) {
//     console.log('Connection has been established successfully.');
//   }, function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

//generar base de datos
sequelize.sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) {
    console.log('An error occurred while creating the table:', err);
  });

// var request = require("request"),
// 	cheerio = require("cheerio"),
// 	url = "http://www.imdb.com/showtimes/cinema/ES/ci1030037";
//
// request(url, function (error, response, body) {
// 	if (!error) {
//     var parsedResults = [];
//     var $ = cheerio.load(body);
//     $("[itemtype='http://schema.org/Movie']").each(function() {
//       normalizeWhitespace: true;
//       var link = $(this);
//       var image = link.find('img').attr('src');
//       var name = link.find('.info').find('span').children('a').text();
//       var hour = link.find('.info').find('.showtimes').text();
//       var hour=hour.replace(/\n/g, "");
//       var hour=hour.replace(/[ ]+/g, "");
//       if (name != ''){
//         var metadata = {
//           title: name,
//           imagen: image,
//           hora: hour,
//         };
//         parsedResults.push(metadata);
//       }
//   });
//   logger.info(parsedResults);
// 	} else {
// 		console.log("We’ve encountered an error: " + error);
// 	}
// });

router.get('/', function(req, res, next) {
  //mostramos todas las ciudades
  res.send('hola mundo');
});

//CIUDADES
router.get('/ciudades', function(req, res, next) {
  //mostramos todas las ciudades
  ciudades.all().then(function(projects) {
    res.status(200).json(projects)
  })
});

//formulario para crear una nueva ciudad
router.get("/crear/ciudad", function(req, res){
    res.render("addCiudades",{
			title : "Formulario para crear ciudades"
		});
});

//crear ciudad
router.post("/crear/ciudad", function(req,res)
{
	//creamos un objeto con los datos a insertar del usuario
  ciudades.create({ name: req.body.nombre})
  .then(function(err) {
      console.log('It worked!');
      res.redirect('/')
  }, function (err) {
      console.log('An error occurred while creating the table:', err);
  });
});

//CINES
router.get('/cines', function(req, res, next) {
  //mostramos todas las ciudades
  cines.all().then(function(projects) {
    res.status(200).json(projects)
  })
});

router.get("/crear/cine", function(req, res){
  ciudades.all().then(function(projects) {
    res.render("addCine",{
			title : "Formulario para crear cines",
      data:projects,
		});
    logger.info(projects)
  });

});

router.post("/crear/cine", function(req,res)
{
	//creamos un objeto con los datos a insertar del usuario
  cines.create({ name: req.body.nombre,
                address:req.body.direccion,
                phone:req.body.telefono,
                ciudadId:req.body.ciudad})
  .then(function(err) {
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
    res.status(200).json(projects)
  })
});

router.get("/crear/pelicula", function(req, res){
    res.render("addPelicula",{
			title : "Formulario para crear pelicula"
		});
});

router.post("/crear/pelicula", function(req,res)
{
	//creamos un objeto con los datos a insertar del usuario
  peliculas.create({ name: req.body.nombre,
                image:req.body.imagen,
                  })
  .then(function(err) {
      console.log('It worked!');
      res.redirect('/')
  }, function (err) {
      console.log('An error occurred while creating the table:', err);
  });
});

//FUNCIONES
router.get('/funciones', function(req, res, next) {
  //mostramos todas las ciudades
  funciones.all().then(function(projects) {
    res.status(200).json(projects)
  })
});

router.get("/crear/funcion", function(req, res){
  peliculas.all().then(function(projects2) {
    cines.all().then(function(projects) {
      res.render("addFunciones",{
        title : "Formulario para crear funciones",
        data:projects,data2:projects2,
      });
    });
  });
});

router.post("/crear/funcion", function(req,res){
	//creamos un objeto con los datos a insertar del usuario
  funciones.create({ hour: req.body.hora,
                day:req.body.dia,
                cineId:req.body.cine,
                peliculaId:req.body.pelicula,
                  })
  .then(function(err) {
      console.log('It worked!');
      res.redirect('/')
  }, function (err) {
      console.log('An error occurred while creating the table:', err);
  });
});

module.exports = router;
