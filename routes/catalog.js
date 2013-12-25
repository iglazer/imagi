//Catalog page data

var fs = require('fs');

exports.show = function (req, res) {
	var imgFiles = [];
	fs.readdir(__dirname + "/../uploads/thumbs", function(err, files){
		files.forEach(function(elem){
			if (elem.indexOf('.')!==0) {
				imgFiles.push({imgFile:elem});
			}
		});
		
		if (err) throw err;
	});

	res.render('catalog', {
		title: 'Check out all these images!',
		images: imgFiles,
		links: {
			uploader: { url:'/uploader', text: 'Upload an image'},
			catalog: { url:'/catalog', text:'See all the images'}
		}
		});
};
