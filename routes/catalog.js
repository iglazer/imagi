//Catalog page data

var fs = require('fs');

exports.show = function (req, res) {
	var imgFiles = [];
	fs.readdir(__dirname + "/../uploads/thumbs", function(err, files){
		
		for (file in files){
			imgFiles.push({imgFile:file});
		}
		if (err) throw err;
	});

	res.render('catalog', {
		title: 'Check out all these images!',
		images: imgFiles
		});
};
