import React, {useState, useEffect} from 'react';
import {teams} from '../App';
import Axios from 'axios';

export default function Game(props) {
    let {game} = props;
    let allTeams = teams;
    let [homeTeam, setHomeTeam] = useState("");
    let [awayTeam, setAwayTeam] = useState("");

    useEffect(() => { Axios.get(`http://localhost:5000/team/${game.HomeTeamID}`).then(res => res.data).then(setHomeTeam) }, []);
    useEffect(() => { Axios.get(`http://localhost:5000/team/${game.AwayTeamID}`).then(res => res.data).then(setAwayTeam) }, []);

    // useEffect(() => {
    //     Axios.get(`http://localhost:5000/team/${props.game.homeTeam}`).then(res => import(/* webpackMode: "eager" */ `../img/${res.data.logo}`).then(src => setHomeLogo(src.default)));
    //     Axios.get(`http://localhost:5000/team/${props.game.awayTeam}`).then(res => import(/* webpackMode: "eager" */ `../img/${res.data.logo}`).then(src => setAwayLogo(src.default)));
    // }, []);

    return (
        <div class="tile is-child box">
            <div class="level">
                <div className="level-left">
                    <div class="level-item has-text-centered">
                        <div className="is-flex is-vertical is-horizontal-center">
                            <div class="image is-64x64">
                                <img src={awayTeam ? awayTeam.TeamLogoUrl : ""} />
                            </div>
                            <p className="heading">{awayTeam ? awayTeam.ShortDisplayName : ""}</p>
                        </div>
                    </div>
                    {!!game.awayScore && <div class="level-item has-text-centered">
                        <h1 class="title">{game.awayScore}</h1>
                    </div>}
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <h1 class="title">{!!game.homeScore ? '-' : '@'}</h1>
                    </div>
                </div>
                <div className="level-right">
                    {!!game.homeScore && <div class="level-item has-text-centered">
                        <h1 class="title">{game.homeScore}</h1>
                    </div>}
                    <div class="level-item has-text-centered">
                        <div className="is-flex is-vertical is-horizontal-center">
                            <div class="image is-64x64">
                                <img src={homeTeam ? homeTeam.TeamLogoUrl : ""} />
                            </div>
                            <p className="heading">{homeTeam ? homeTeam.ShortDisplayName : ""}</p>
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