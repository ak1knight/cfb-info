
const teams = require("./teams.json");
const teamColors = require("./team_colors.json");

const teamsWithColors = teams.map(team => {return {...team, ...teamColors.find(t => t.TeamID == team.TeamID)}});

exports.list = function(req, res){
    res.send(JSON.stringify(teamsWithColors.filter(team => !!team.PrimaryColor)));
};
  
exports.load = function(req, res, next){
    let team = teamsWithColors.find(t => t.TeamID == req.params.id)
    if (team) {
        res.send(team);
    } else {
        var err = new Error('cannot find team ' + req.params.id);
        err.status = 404;
        next(err);
    }
};