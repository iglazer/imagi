//Uploader page data

exports.show = function (req, res) {
	file = req.params.file;	

	res.render('showImage', {
		title: file,
		imgPath: "/uploads/fullsize/" + file,
		links: {
			uploader: { url:'/uploader', text: 'Upload an image'},
			catalog: { url:'/catalog', text:'See all the images'}
		}
	});	
};
