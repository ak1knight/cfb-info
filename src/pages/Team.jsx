import React, {useState, useEffect} from 'react';
import Color from 'color';
import Schedule from '../components/Schedule';
import Axios from 'axios';

function Team(props) {
    let [logo, setLogo] = useState("");
    let [games, setGames] = useState([]);
    let [team, setTeam] = useState([]);

    useEffect(() => { Axios.get(`http://localhost:5000/team/${props.match.params.id}`).then(res => res.data).then(setTeam) }, [props.match.params.id]);  
    useEffect(() => { !!team && Axios.get(`http://localhost:5000/games/team/${team.TeamID}`).then(res => res.data).then(setGames) }, [team]);

    //import(/* webpackMode: "eager" */ `../img/${team.logo}`).then(src => setLogo(src.default));

    return (
        <div>
            <section className="hero is-primary is-bold" style={{backgroundImage: createGradient(team.PrimaryColor), borderBottom: '1px solid white', borderImage: `${createGradient(team.SecondaryColor)} 1 / 0px 0px 8px / 0px round`}}>
                <div className="hero-body">
                    <div className="container">
                        <nav className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <div>
                                        <p className="title">
                                            {`${team.School} ${team.Name}`}
                                        </p>
                                        <p className="heading">
                                            {team.Conference}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="level-right">
                                <div className="level-item">
                                    <figure className="image is-128x128 is-vcentered">
                                        <img src={team.TeamLogoUrl} />
                                    </figure>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <Schedule games={games} />
                        </div>
                        <div className="column">
                            <div className="tile is-vertical is-parent">
                                <div className="tile is-child title">
                                    Schedule
                                </div>

                                <nav className="panel tile is-child">
                                    {/* <p className="panel-heading">
                                        Team Facts
                                    </p> */}
                                    <div className="panel-block is-team-info">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <p>
                                                    Stadium:
                                                </p>
                                            </div>
                                        </div>

                                        <div className="level-right">
                                            <div className="level-item">
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