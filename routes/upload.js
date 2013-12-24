var fs = require('fs');
var im = require('imagemagick');

exports.doIt = function (req, res) {
	fs.readFile(req.files.image.path, function (err, data) {
		var imageName = req.files.image.name;

		/// If there's an error
		if(!imageName){

			console.log("There was an error")
			res.redirect("/");
//			res.end();
		} else {
			var newPath = __dirname + "/../uploads/fullsize/" + imageName;
			var thumbPath = __dirname + "/../uploads/thumbs/" + imageName;

			/// write file to uploads/fullsize folder
			fs.writeFile(newPath, data, function (err) {
				/// write file to uploads/thumbs folder
				im.resize({
				srcPath: newPath,
				dstPath: thumbPath,
				width:   200
				}, function(err, stdout, stderr){
					if (err) throw err;
					console.log('resized image to fit within 200x200px');
				});

				/// let's see it
				res.redirect("/show/" + imageName);
			});
		}
	});
}

exports.show = function(req, res) {
	file = req.params.file;	
	var imgData = fs.readFileSync(__dirname + "/../uploads/fullsize/" + file);
	res.end(imgData,'binary');
}