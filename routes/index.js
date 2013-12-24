
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Imagi - Ian\'s Image Uploader and such',
  						message: 'Well don\'t just stand there!',
  						links: {
  							uploader: { url:'/uploader', text: 'Upload an image'},
  							catalog: { url:'/catalog', text:'See all the images'}
  						}	
  					 });
};