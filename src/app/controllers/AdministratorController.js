class AdministratorController {

    create (req, res) {
        res.render('admin-database');
    }
}

module.exports = new AdministratorController;