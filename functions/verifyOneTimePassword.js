const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!(req.body.code && req.body.phone)) {
    return res.status(422).send({ error: 'Phone and code must be provided' });
  }

  const phone = String(req.body.phone).replace(/\D+/g, '');
  const code = parseInt(req.body.code);

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref('users').child(phone);
      ref.on('value', snapshot => {
        ref.off();
        const user = snapshot.val();

        if (!(user.code === code && user.codeValid)) {
          return res.status(422).send({ error: 'Invalid code' });
        }

        ref.update({ codeValid: false });

        admin.auth().createCustomToken(phone)
          .then(token => res.send({ token }));
      });
    })
    .catch(error => res.status(422).send({ error }))
};
