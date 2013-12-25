var fs = require('fs');

exports.clean = function(req, res){
	fs.readdir(__dirname + "/../uploads/thumbs", function(err, files){
		files.forEach(function(elem){
			if (elem.indexOf('.')!==0) {
				fs.unlink(__dirname + "/../uploads/thumbs/" + elem, function(err){
					if(err) throw err;
				});			
				fs.unlink(__dirname + "/../uploads/fullsize/" + elem, function(err){
					if(err) throw err;
				});
				console.log('unlinked: ' + elem);						
			}
		});
	});	

	res.redirect('/');
};