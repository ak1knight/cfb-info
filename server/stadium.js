const stadiums = require("./stadiums.json");

exports.list = function(req, res){
    res.send(JSON.stringify(stadiums));
};
  
exports.load = function(req, res, next){
    let team = stadiums.find(t => t.StadiumID == req.params.id)
    if (team) {
        res.send(team);
    } else {
        var err = new Error('cannot find stadium ' + req.params.id);
        err.status = 404;
        next(err);
    }
};