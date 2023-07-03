class ContactsController {

    index (req, res) {
        res.render('contacts');
    }
}

module.exports = new ContactsController;
