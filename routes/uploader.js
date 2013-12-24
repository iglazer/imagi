//Uploader page data

exports.uploader = function (req, res) {
	res.render('uploader', {
		title: 'Upload an image',
		instructions: 'Browse for an image from your desktop and upload it',
		help_url: '/help',
		help_text: 'Need a little help?'
	});	
};