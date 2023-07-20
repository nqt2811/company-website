class ServicesController {

    index (req, res) {
        res.render('services');
    }
}

module.exports = new ServicesController;
