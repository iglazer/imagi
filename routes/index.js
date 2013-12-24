
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Imagi - Ian\'s Image Uploader and such',
  						message: 'Well don\'t just stand there!' });
};