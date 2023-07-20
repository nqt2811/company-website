class AboutUsController {
    index (req, res) {
        res.render('about-us');
    }
}

module.exports = new AboutUsController;