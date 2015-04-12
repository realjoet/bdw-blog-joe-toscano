//include tools
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  posts = require('../../config/posts');


module.exports = function (app) {
  app.use('/article', router);
};

//controllers
router.get('/', function (req, res, next) {

  //find all articles in the MongoDB
  Article.find({}, function(err, articles){

    console.log('articles: ', articles);

    //throw error
    if(err) return next(err);

    //render = HTML, send = JSON
    res.render('article/list', {
      title: 'Articles',
      articles: articles //return all articles to the list.swig file
    });

  });

});

router.get('/:guid', function (req, res, next) {

  //find all articles in the MongoDB
  Article.find(guid, function(err, articles){

    console.log('description: ', articles.description);

    //throw error
    if(err) return next(err);

    //render = HTML, send = JSON
    res.render('article/show', {
      title: 'My Articles',
      articles: posts
    });

  });

});

//EXAMPLES
//localhost:3000/article
//localhost:3000/article/1/edit - edit article view
//localhost:3000/article/1/create - update article by id
//localhost:3000/article/1 - view article
//localhost:3000/article/list - list articles
