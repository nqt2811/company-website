const Message = require('../models/Message');

class ContactsController {
    index (req, res) {
        res.render('contacts');
    }

    message (req, res, next) {
        const formData = req.body;
        const message = new Message(formData);
        message.save()
            .then(() => {
                res.redirect('/contacts');
            })
            .catch(next);
    }
}

module.exports = new ContactsController;
