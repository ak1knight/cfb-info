import React, {useState, useEffect} from 'react';
import Color from 'color';
import Schedule from '../components/Schedule';
import Axios from 'axios';

function Team(props) {
    let [logo, setLogo] = useState("");
    let [games, setGames] = useState([]);

    useEffect(() => { Axios.get(`http://localhost:5000/games/team/${props.team.TeamID}`).then(res => res.data).then(setGames) }, []);

    //import(/* webpackMode: "eager" */ `../img/${props.team.logo}`).then(src => setLogo(src.default));

    return (
        <div>
            <section class="hero is-primary is-bold" style={{backgroundImage: createGradient(props.team.PrimaryColor), borderBottom: '1px solid white', borderImage: `${createGradient(props.team.SecondaryColor)} 1 / 0px 0px 8px / 0px round`}}>
                <div class="hero-body">
                    <div class="container">
                        <nav class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <div>
                                        <p class="title">
                                            {`${props.team.School} ${props.team.Name}`}
                                        </p>
                                        <p class="heading">
                                            {props.team.Conference}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="level-right">
                                <div class="level-item">
                                    <figure class="image is-128x128 is-vcentered">
                                        <img src={props.team.TeamLogoUrl} />
                                    </figure>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <section class="section">
                <div className="container">
                    <div class="columns">
                        <div class="column is-two-thirds">
                            <Schedule games={games} />
                        </div>
                        <div class="column">
                            <div class="tile is-vertical is-parent">
                                <div class="tile is-child title">
                                    Schedule
                                </div>

                                <nav class="panel tile is-child">
                                    {/* <p class="panel-heading">
                                        Team Facts
                                    </p> */}
                                    <div class="panel-block is-team-info">
                                        <div class="level-left">
                                            <div class="level-item">
                                                <p>
                                                    Stadium:
                                                </p>
                                            </div>
                                        </div>

                                        <div class="level-right">
                                            <div class="level-item">
                                                <p>
                                                    Rice-Eccles Stadium
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function createGradient(color) {
    let base = Color(color).hsl();
    let lighter = base.rotate(10).lightness(base.lightness() + 5);
    let darker = base.rotate(-10).lightness(base.lightness() - 10);
  
    return `linear-gradient(141deg, ${darker} 0%, ${base} 71%, ${lighter} 100%)`
  }

export default Team