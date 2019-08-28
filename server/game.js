
let games = [
    {
        homeTeam: 1,
        awayTeam: 0,
        date: new Date('8/29/2019 8:15 PM')
    },
    {
        homeTeam: 0,
        awayTeam: 2,
        date: new Date('9/7/2019 11:00 AM'),
        homeScore: 27,
        awayScore: 34
    },
    {
        homeTeam: 1,
        awayTeam: 2,
        date: new Date()
    },
    {
        homeTeam: 3,
        awayTeam: 1,
        date: new Date(),
        homeScore: 27,
        awayScore: 34
    },
    {
        homeTeam: 3,
        awayTeam: 4,
        date: new Date(),
        homeScore: 27,
        awayScore: 34
    }
]

exports.list = function(req, res){
    res.send(games);
};

exports.listGamesForTeam = function(req, res){
    res.send(games.filter(game => game.homeTeam == req.params.id || game.awayTeam == req.params.id));
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