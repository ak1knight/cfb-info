import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default function Game(props) {
    let {game} = props;
    let [homeTeam, setHomeTeam] = useState("");
    let [awayTeam, setAwayTeam] = useState("");

    useEffect(() => { Axios.get(`http://localhost:5000/team/${game.HomeTeamID}`).then(res => res.data).then(setHomeTeam) }, [game]);
    useEffect(() => { Axios.get(`http://localhost:5000/team/${game.AwayTeamID}`).then(res => res.data).then(setAwayTeam) }, [game]);

    return (
        <div className="tile is-child box">
            <div className="level">
                <div className="level-left">
                    <div className="level-item has-text-centered">
                        <div className="is-flex is-vertical is-horizontal-center">
                            <Link to={`/team/${game.AwayTeamID}`}>
                                <div className="image is-64x64">
                                    <img src={awayTeam ? awayTeam.TeamLogoUrl : ""} alt={awayTeam ? `${awayTeam.School} Logo` : "Away Logo"} />
                                </div>
                                <p className="heading">{awayTeam ? `${!!awayTeam.ApRank ? `#${awayTeam.ApRank} ` : '' }${awayTeam.ShortDisplayName}` : ""}</p>
                            </Link>
                        </div>
                    </div>
                    {game.Status === "Final" && <div className="level-item has-text-centered">
                        <h1 className="title">{game.AwayTeamScore}</h1>
                    </div>}
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <h1 className="title">{game.Status === "Final" ? '-' : '@'}</h1>
                    </div>
                </div>
                <div className="level-right">
                    {game.Status === "Final" && <div className="level-item has-text-centered">
                        <h1 className="title">{game.HomeTeamScore}</h1>
                    </div>}
                    <div className="level-item has-text-centered">
                        <div className="is-flex is-vertical is-horizontal-center">
                            <Link to={`/team/${game.HomeTeamID}`}>
                                <div className="image is-64x64">
                                    <img src={homeTeam ? homeTeam.TeamLogoUrl : ""} alt={homeTeam ? `${homeTeam.School} Logo` : "Home Logo"} />
                                </div>
                                <p className="heading">{homeTeam ? `${!!homeTeam.ApRank ? `#${homeTeam.ApRank} ` : '' }${homeTeam.ShortDisplayName}` : ""}</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level">
                <div className="level-left">
                    <p className="level-item heading">{game.Stadium.Name} - {game.Stadium.City}, {game.Stadium.State}</p>
                </div>
                <div className="level-right">
                    <p className="level-item heading">{new Date(game.Day).toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'})}</p>
                    <p className="level-item heading">{!!game.DateTime ? new Date(game.DateTime).toLocaleTimeString(undefined, {hour: 'numeric', minute: '2-digit'}) : 'TBD'}</p>
                </div>
            </div>
        </div>
    )
}