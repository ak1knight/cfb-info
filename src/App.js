import React from 'react';
//import 'bulma';
import './styles/App.scss';
import Team from './pages/Team'

let teams = [
  {
    name: "Utah Utes",
    city: "Salt Lake City, UT",
    color: "#CC0000",
    logo: "Utah_Utes_logo.svg"
  },
  {
    name: "BYU Cougars",
    city: "Provo, UT",
    color: "#002E5D",
    logo: "BYU_Cougars_logo.svg"
  },
  {
    name: "Utah State Aggies",
    city: "Logan, UT",
    color: "#0F2439",
    logo: "Utah_State_Aggies_logo.svg"
  },
  {
    name: "Texas Longhorns",
    city: "Austin, TX",
    color: "#BF5700",
    logo: "Texas_Longhorns_logo.svg"
  },
  {
    name: "LSU Tigers",
    city: "Baton Rouge, LA",
    color: "#461D7C",
    logo: "LSU_Athletics_logo.svg"
  }
]

function App() {
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
