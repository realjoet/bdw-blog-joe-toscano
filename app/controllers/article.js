//include tools
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  posts = require('../../config/posts'),
  guid = Article.guid;


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

router.get('/:id', function (req, res, next) {

  //find all articles in the MongoDB
  Article.findById(req.params.id, function(err, articles){

    console.log('description: ', req.params.id);

    //throw error
    if (err) return next(err);

    //render = HTML, send = JSON
    res.render('article/show', {
      title: 'Article',
      articles: articles
    });

  });

});

//EXAMPLES
//localhost:3000/article
//localhost:3000/article/1/edit - edit article view
//localhost:3000/article/1/create - update article by id
//localhost:3000/article/1 - view article
//localhost:3000/article/list - list articles
