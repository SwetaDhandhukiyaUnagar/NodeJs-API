const userInfoController = require('../controllers').userinfo;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the userInfo API!',
  }));

  app.post('/api/userInfo', userInfoController.create);
  app.get('/api/userInfo', userInfoController.list);
};