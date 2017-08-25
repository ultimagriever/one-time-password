const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }

  // Format the number to remove dashes and parens
  const phone = String(req.body.phone).replace(/\D+/g, '');

  // Create new user account using that number
  admin.auth().createUser({
    uid: phone
  })
    .then(user => res.send(user))
    .catch(error => res.send({ error }));
};
