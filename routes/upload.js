var fs = require('fs');
var im = require('imagemagick');
var crypto = require('crypto');

exports.doIt = function (req, res) {
	var imageName = req.body.imageName;
	var imageDesc = req.body.imageDesc;
	
	console.log(crypto.createHash('sha1').update(req.files.image.name).digest('hex'));
	console.log(imageName);
	console.log(imageDesc);

	fs.readFile(req.files.image.path, function (err, data) {
		var imageName = req.files.image.name;

		/// If there's an error
		if(!imageName){
			console.log("There was an error")
			res.redirect("/");
		} else {
			var newPath = __dirname + "/../uploads/fullsize/" + imageName;
			var thumbPath = __dirname + "/../uploads/thumbs/" + imageName;
			
			fs.open(newPath, 'r', function(err, fd) {
				if(err){
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
					});

					/// let's see it
					res.redirect("/show/" + imageName);									
				} else {
					res.redirect("/show/" + imageName);				
				}
			});
		}
	});
}

exports.show = function(req, res) {
	file = req.params.file;	
	var imgData = fs.readFileSync(__dirname + "/../uploads/fullsize/" + file);
	res.end(imgData,'binary');
}