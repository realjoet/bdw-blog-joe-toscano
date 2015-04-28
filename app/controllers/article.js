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


// !GLOBAL ROUTES -----------------------------
// --------------------------------------------

//localhost:3000/article - SEE LIST OF ARTICLES
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






// ! ARTICLE ROUTES ---------------------
// --------------------------------------------

//localhost:3000/article/1 - VIEW ARTICLE
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

//localhost:3000/article/1/edit - VIEW TO EDIT ARTICLE
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

//localhost:3000/article/id - UPDATES ARTICLE
router.post('/:id', function (req, res, next){
  var id = req.params.id;
  
  console.log(req.body);

  Article.findOneAndUpdate({_id:id}), req.body, function(err, article){
    console.log(article);
    if(err) return next(err);

    res.render('back');
  }
});





// !CREATE ARTICLE ROUTES ---------------------
// --------------------------------------------

//Route to create post page
router.get('/create', function (req, res, next) {
  res.render('article/create', {
    title: 'Create New Article',
    article: article,
  });
});

//Route to post new article
router.post('/list', function(req, res, next) {
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






// !PUSH TO HEROKU DB ---------------------
// --------------------------------------------

//Pushing articles to server
router.get('/bootstrap', function (req, res, next){
  Article.create(posts.posts, function (err, articles){
    if(err) return next(err);
    res.send(articles);
  })
})





