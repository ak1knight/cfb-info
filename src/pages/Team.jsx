import React, {useState, useEffect} from 'react';
import Color from 'color';
import Schedule from '../components/Schedule';
import Axios from 'axios';

function Team(props) {
    let [logo, setLogo] = useState("");
    let [games, setGames] = useState([]);

    useEffect(() => { Axios.get(`http://localhost:5000/games/team/${props.teamId}`).then(res => res.data).then(setGames) }, []);

    import(/* webpackMode: "eager" */ `../img/${props.team.logo}`).then(src => setLogo(src.default));

    return (
        <div>
            <section class="hero is-primary is-bold" style={{backgroundImage: createGradient(props.team.color)}}>
                <div class="hero-body">
                    <div class="container">
                        <nav class="level">
                            <div class="level-left">
                                <div class="level-item">
                                    <div>
                                        <p class="title">
                                            {`${props.team.name} ${props.team.mascot}`}
                                        </p>
                                        <p class="heading">
                                            {props.team.city}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="level-right">
                                <div class="level-item">
                                    <figure class="image is-128x128 is-vcentered">
                                        <img src={logo ? logo : ""} />
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
                            <div class="tile is-vertical is-ancestor">
                                <div className="tile is-parent">
                                    <article class="message tile is-child">
                                        <div class="message-header">
                                            <p>About</p>
                                        </div>
                                        <div class="message-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                                        </div>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile">
                                        <p>Test</p>
                                    </div>
                                    <div class="tile is-child box">
                                        <p>Test</p>
                                    </div>
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