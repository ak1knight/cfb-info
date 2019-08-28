const express = require('express');
const cors = require('cors')
const team = require('./team');
const game = require('./game');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/teams', team.list);
app.get('/team/:id', team.load);

app.get('/games', game.list);
app.get('/games/team/:id', game.listGamesForTeam);
app.get('/game/:id', game.load);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));