import React, {useState} from 'react';
import {teams} from '../App';

export default function Game(props) {
    let {game} = props;
    let allTeams = teams;
    let [homeLogo, setHomeLogo] = useState("");
    let [awayLogo, setAwayLogo] = useState("");

    import(/* webpackMode: "eager" */ `../img/${allTeams[props.game.homeTeam].logo}`).then(src => setHomeLogo(src.default));
    import(/* webpackMode: "eager" */ `../img/${allTeams[props.game.awayTeam].logo}`).then(src => setAwayLogo(src.default));

    return (
        <div class="tile is-child box">
            <div class="level">
                <div className="level-left">
                    <div class="level-item has-text-centered">
                        <div>
                            <figure class="image is-64x64">
                                <img src={awayLogo ? awayLogo : ""} />
                            </figure>
                            <p className="heading">{teams[game.awayTeam].name}</p>
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
                        <div>
                            <figure class="image is-64x64">
                                <img src={homeLogo ? homeLogo : ""} />
                            </figure>
                            <p className="heading">{teams[game.homeTeam].name}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="level">
                <div className="level-left">
                    <p className="level-item heading">{teams[game.homeTeam].city}</p>
                </div>
                <div className="level-right">
                    <p className="level-item heading">{game.date.toLocaleDateString(undefined, {month: 'long', day: 'numeric', year: 'numeric'})}</p>
                    <p className="level-item heading">{game.date.toLocaleTimeString(undefined, {hour: 'numeric', minute: '2-digit'})}</p>
                </div>
            </div>
        </div>
    )
}