const UserInfo = require('../models').UserInfo;

module.exports = {
  create(req, res) {
    return UserInfo
      .create({
        name: req.body.name,
        email: req.body.email
      })
      .then(userinfo => res.status(201).send(userinfo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return UserInfo
      .findAll(
          { 
              where: {
                  'id':5
              }
            }
      )
      .then(userinfo => res.status(200).send(userinfo))
      .catch(error => res.status(400).send(error));
  },
};