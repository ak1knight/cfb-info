
let games = require('./games.json');

exports.list = function(req, res){
    res.send(games);
};

exports.listGamesForTeam = function(req, res){
    res.send(games.filter(game => game.HomeTeamID == req.params.id || game.AwayTeamID == req.params.id));
};
  
exports.load = function(req, res, next){
    if (games[req.params.id]) {
        res.send(JSON.stringify(games[req.params.id]));
    } else {
        var err = new Error('cannot find game ' + req.params.id);
        err.status = 404;
        next(err);
    }
};