
let teams = [
    {
        name: "Utah",
        mascot: "Utes",
        city: "Salt Lake City, UT",
        color: "#CC0000",
        logo: "Utah_Utes_logo.svg"
    },
    {
        name: "BYU",
        mascot: "Cougars",
        city: "Provo, UT",
        color: "#002E5D",
        logo: "BYU_Cougars_logo.svg"
    },
    {
        name: "Utah State",
        mascot: "Aggies",
        city: "Logan, UT",
        color: "#0F2439",
        logo: "Utah_State_Aggies_logo.svg"
    },
    {
        name: "Texas",
        mascot: "Longhorns",
        city: "Austin, TX",
        color: "#BF5700",
        logo: "Texas_Longhorns_logo.svg"
    },
    {
        name: "LSU",
        mascot: "Tigers",
        city: "Baton Rouge, LA",
        color: "#461D7C",
        logo: "LSU_Athletics_logo.svg"
    }
]

exports.list = function(req, res){
    res.send(JSON.stringify(teams));
};
  
exports.load = function(req, res, next){
    if (teams[req.params.id]) {
        res.send(JSON.stringify(teams[req.params.id]));
    } else {
        var err = new Error('cannot find team ' + req.params.id);
        err.status = 404;
        next(err);
    }
};