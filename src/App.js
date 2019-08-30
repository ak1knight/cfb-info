import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

  return (
    <Router>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Teams
              </a>
              <a className="navbar-item">
                Conferences
              </a>
              <a className="navbar-item">
                Players and Coaches
              </a>
            </div>
            <div className="navbar-end">
            </div>
          </div>
        </div>
      </nav>

      <Route path="/team/:id" component={Team} />
    </Router>
  );
}

export default App;
