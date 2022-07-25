const path = require('path');

const getIndexPage = (req, res, next) => {
    res.render('index', {
        title: "Phish | Phishing Links"
    })
}


module.exports = { getIndexPage };