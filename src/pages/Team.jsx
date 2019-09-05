import React, {useState, useEffect} from 'react';
import Color from 'color';
import Schedule from '../components/Schedule';
import Axios from 'axios';

function Team(props) {
    let [games, setGames] = useState([]);
    let [team, setTeam] = useState([]);
    let [stadium, setStadium] = useState([])

    useEffect(() => { Axios.get(`http://localhost:5000/team/${props.match.params.id}`).then(res => res.data).then(setTeam) }, [props.match.params.id]);  
    useEffect(() => { !!team && Axios.get(`http://localhost:5000/games/team/${team.TeamID}`).then(res => res.data).then(setGames) }, [team]);
    useEffect(() => { !!team && Axios.get(`http://localhost:5000/stadium/${team.StadiumID}`).then(res => res.data).then(setStadium) }, [team]);

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
                                            {`${!!team.ApRank ? `#${team.ApRank} ` : '' }${team.School} ${team.Name}`}
                                        </p>
                                        <p className="heading">
                                            {!!stadium && `${stadium.City}, ${stadium.State}`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="level-right">
                                <div className="level-item">
                                    <figure className="image is-128x128 is-vcentered">
                                        <img src={team.TeamLogoUrl} alt={`${team.School} Logo`} />
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
                                <div className="tile is-child">
                                    <nav class="level">
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <p class="heading">Overall</p>
                                                <p class="title">{`${team.Wins} - ${team.Losses}`}</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <p class="heading">Conference</p>
                                                <p class="title">{`${team.ConferenceWins} - ${team.ConferenceLosses}`}</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                {(!!team.ApRank || !!team.CoachesRank || !!team.PlayoffRank) && <div className="tile is-child">
                                    <nav class="level">
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <p class="heading">AP</p>
                                                <p class="title">{`#${team.ApRank || 'NR'}`}</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <p class="heading">Coaches</p>
                                                <p class="title">{`#${team.CoachesRank || 'NR'}`}</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <p class="heading">Playoff</p>
                                                <p class="title">{`#${team.PlayoffRank || 'NR'}`}</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>}
                                <nav class="panel">
                                    <p class="panel-heading">
                                        Team Info
                                    </p>
                                    <div class="panel-block">
                                        <span class="panel-icon">
                                            <i class="fas fa-landmark" aria-hidden="true"></i>
                                        </span>
                                        {!!stadium && stadium.Name}
                                    </div>
                                    <div class="panel-block">
                                        <span class="panel-icon">
                                        <i class="fas fa-user-friends" aria-hidden="true"></i>
                                        </span>
                                        {team.Conference}
                                    </div>
                                </nav>
                                <div class="card">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                            Component
                                        </p>
                                        <a href="#" class="card-header-icon" aria-label="more options">
                                            <span class="icon">
                                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </header>
                                    <div class="card-content">
                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                                            <br/>
                                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                        </div>
                                    </div>
                                    <footer class="card-footer">
                                        <a href="#" class="card-footer-item">Save</a>
                                        <a href="#" class="card-footer-item">Edit</a>
                                        <a href="#" class="card-footer-item">Delete</a>
                                    </footer>
                                </div>
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