var fs = require('fs');

exports.doit = function (req, res) {
	fs.readFile(req.files.image.path, function (err, data) {
		var imageName = req.file.image.name;

		/// If there's an error
		if(!imageName){

			console.log("There was an error")
			res.redirect("/");
			res.end();
		} else {
			var newPath = __dirname + "/uploads/fullsize/" + imageName;

			/// write file to uploads/fullsize folder
			fs.writeFile(newPath, data, function (err) {

				/// let's see it
				res.redirect("/uploads/fullsize/" + imageName);
			});
		}
	});
}