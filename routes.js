'use strict';

exports = module.exports = function(app, passport) {

  app.get('/', require('./api/index').helloWorld);
  
  app.post('/1/contact', require('./api/contact/index').sendMessage); 
  
  // MySQL 使用範例
  app.get('/1/querysql', require('./api/testMysql').query);    
  
  // MongoDB 使用範例
  app.get('/1/post', require('./api/testMongodb').readAll);
  app.post('/1/post', require('./api/testMongodb').create);
  app.post('/1/post/query', require('./api/testMongodb').createByQuery);
  app.put('/1/post/:name/publish', require('./api/testMongodb').activate);      
  app.put('/1/post/:name/unpublish', require('./api/testMongodb').inactivate);
  app.delete('/1/post/:id', require('./api/testMongodb').delete); 

  //route not found
  app.all('*', require('./api/http/index').http404);
};
