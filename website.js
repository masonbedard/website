var express = require('express'),
    app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('projects.ejs');
});

app.get('/projects', function(req, res) {
  res.render('projects.ejs');
});

app.get('/about', function(req, res) {
  res.render('about.ejs');
});

app.get('/balltapapp', function(req, res) {
  res.render('balltapapp.ejs');
});

app.get('/freshmelodies', function(req, res) {
  res.render('freshmelodies.ejs');
});

app.get('/bltorrent', function(req, res) {
  res.render('bltorrent.ejs');
});

app.get('/questions', function(req, res) {
  res.render('questions.ejs');
});

app.get('/chat', function(req, res) {
  res.render('chat.ejs');
});

app.listen(9000);
