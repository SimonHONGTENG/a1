module.exports = function(app, path) {
    var bodyParse = require('body-parser');
    app.use(bodyParse.json());

    app.get('/api/login', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }


        var user = {};
        user.username = req.body.username;
        var j = { "ok": false, errors: { 'e': 'User credentials do not match' } };

        res.send(j);
    });
}