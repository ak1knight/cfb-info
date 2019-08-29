import React, {useState, useEffect} from 'react';
//import 'bulma';
import './styles/App.scss';
import Team from './pages/Team'
import Axios from 'axios';

export let teams = [
  {
    name: "Utah",
    mascot: "Utes",
    city: "Salt Lake City, UT",
    color: "#CC0000",
    logo: "Utah_Utes_logo.svg",
    games: [
      {
        homeTeam: 1,
        awayTeam: 0,
        date: new Date('8/29/2019 8:15 PM')
      },
      {
        homeTeam: 3,
        awayTeam: 0,
        date: new Date('9/7/2019 11:00 AM'),
        homeScore: 27,
        awayScore: 34
      }
    ]
  },
  {
    name: "BYU",
    mascot: "Cougars",
    city: "Provo, UT",
    color: "#002E5D",
    logo: "BYU_Cougars_logo.svg",
    games: [
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
      }
    ]
  },
  {
    name: "Utah State",
    mascot: "Aggies",
    city: "Logan, UT",
    color: "#0F2439",
    logo: "Utah_State_Aggies_logo.svg",
    games: [
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
      }
    ]
  },
  {
    name: "Texas",
    mascot: "Longhorns",
    city: "Austin, TX",
    color: "#BF5700",
    logo: "Texas_Longhorns_logo.svg",
    games: [
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
      }
    ]
  },
  {
    name: "LSU",
    mascot: "Tigers",
    city: "Baton Rouge, LA",
    color: "#461D7C",
    logo: "LSU_Athletics_logo.svg",
    games: [
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
      }
    ]
  }
]

function App() {
  let [teams, setTeams] = useState([]);

  useEffect(() => { Axios.get('http://localhost:5000/teams').then(res => res.data).then(team => setTeams(team.filter(t => t.ConferenceID == 5))) }, []);

  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">
                Teams
              </a>
              <a class="navbar-item">
                Conferences
              </a>
              <a class="navbar-item">
                Players and Coaches
              </a>
            </div>
            <div class="navbar-end">
            </div>
          </div>
        </div>
      </nav>
      {teams.map((team, i) => <Team team={team} key={i} />)}
    </div>
  );
}

export default App;
