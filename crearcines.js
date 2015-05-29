var request = require("request");
var cheerio = require("cheerio");
var logger = require('./logger');
var peliculas = require('./models/peliculas');

function crearcines(url,cine,fecha) {
  request(url, function (error, response, body) {
  	if (!error) {
      var parsedResults = [];
      var $ = cheerio.load(body);
      $("[itemtype='http://schema.org/Movie']").each(function() {
        normalizeWhitespace: true;
        var link = $(this);
        var imagen = link.find('img').attr('src');
        var nombre = link.find('.info').find('span').children('a').text();
        var duracion = link.find('.info').find('time').text();
        var hour = link.find('.info').find('.showtimes').text();
        var type = link.find('.info').find('.li_group').text();
        var hour=hour.replace(/\n/g, "");
        var hour=hour.replace(/[ ]+/g, "");
        var count = (type.match(/Showtimes/g) || []).length;
        if (type.includes('3D') == false){
          type= '2D'
        }else {
          type='3D'
        }
        if (count == 2){
          type= '2D - 3D'
        }

        if (nombre != ''){
          peliculas.create({ name: nombre,
                        image:imagen,
                        duration:duracion,
                        cineId:cine,
                        hour:hour,
                        day:fecha,
                        tipo:type,
                          })
          .then(function(m) {
            logger.info('se creo pelicula')
          }, function (err) {
              console.log('An error occurred while creating the table:', err);
          });
          //
          //
          // logger.info(duration);
          // var metadata = {
          //   title: name,
          //   imagen: image,
          //   // hora: hour,
          // };
          // parsedResults.push(metadata);
        }
    });
  	} else {
  		console.log("We’ve encountered an error: " + error);
  	}
  });
  }




module.exports = crearcines;
