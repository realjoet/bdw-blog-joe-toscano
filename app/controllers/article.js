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
//localhost:3000/article
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

//localhost:3000/article/1 - view article
router.get('/:id', function (req, res, next) {
  var id = req.params.id;

  //find all articles in the MongoDB
  Article.findOne({_id: id}, function (err, article){

    console.log('description: ', id);

    //render = HTML, send = JSON
    res.render('article/show', {
      title: 'Article',
      article: article
    });

  });

});

//localhost:3000/article/1/edit - edit article view
router.get('/:id/edit', function (req, res, next) {
  var id = req.params.id;

  //find all articles in the MongoDB
  Article.findOne({_id: id}, function (err, article){

    console.log('description: ', id);

    //render = HTML, send = JSON
    res.render('article/edit', {
      title: 'Article',
      article: article
    });

  });

});

///localhost:3000/article/1/create - update article by id
// router.get('/:id/create', function (req, res, next) {

//   //find all articles in the MongoDB
//   Article.findById(req.params.id, function(err, articles){

//     console.log('description: ', req.params.id);

//     //throw error
//     if (err) return next(err);

//     //render = HTML, send = JSON
//     res.render('article/create', {
//       title: 'Article',
//       articles: articles
//     });

//   });

// });

//Update blog post
router.post('/:id', function (req, res, next){
  var id = req.params.id;
  console.log(req.body);

  Article.findOneAndUpdate({_id:id}), req.body, function(err, article){
    console.log(article);
    if(err) return next(err);

    res.render('back');
  }
});

//Pushing articles to server
router.get('/bootstrap', function (req, res, next){
  Article.create(posts.posts, function (err, articles){
    if(err) return next(err);
    res.send(articles);
  })
})





