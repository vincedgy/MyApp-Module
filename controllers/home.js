var config = require('../config')
    , path = require('path');

module.exports = function (req, res) {
    res.render(path.join(config.viewsDir, 'index'));
};