import React, {useState} from 'react';
//import logo from '../img/Utah_Utes_logo.svg'
import Color from 'color';

function Team(props) {
    let [logo, setLogo] = useState("");

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
                                            {props.team.name}
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
                    <div class="tile is-ancestor">
                        <div class="tile is-6 is-vertical is-parent">
                            <div class="tile is-child title">
                                Schedule
                            </div>
                            <div class="tile is-child box">
                                <div class="level">
                                    <div className="level-left">
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <figure class="image is-64x64">
                                                    <img src={logo ? logo : ""} />
                                                </figure>
                                                <p className="heading">Utah</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="level-item has-text-centered">
                                        <div>
                                            <h1 class="title">@</h1>
                                        </div>
                                    </div>
                                    <div className="level-right">
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <figure class="image is-64x64">
                                                    <img src={logo ? logo : ""} />
                                                </figure>
                                                <p className="heading">Utah</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="level">
                                    <div className="level-left">
                                        <p className="level-item heading">Salt Lake City, UT</p>
                                    </div>
                                    <div className="level-right">
                                        <p className="level-item heading">October 10, 2019</p>
                                        <p className="level-item heading">8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tile is-child box">
                                <div class="level">
                                    <div className="level-left">
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <figure class="image is-64x64">
                                                    <img src={logo ? logo : ""} />
                                                </figure>
                                                <p className="heading">Utah</p>
                                            </div>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <h1 class="title">17</h1>
                                        </div>
                                    </div>
                                    <div class="level-item has-text-centered">
                                        <div>
                                            <h1 class="title">-</h1>
                                        </div>
                                    </div>
                                    <div className="level-right">
                                        <div class="level-item has-text-centered">
                                            <h1 class="title">24</h1>
                                        </div>
                                        <div class="level-item has-text-centered">
                                            <div>
                                                <figure class="image is-64x64">
                                                    <img src={logo ? logo : ""} />
                                                </figure>
                                                <p className="heading">Utah</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="level">
                                    <div className="level-left">
                                        <p className="level-item heading">Salt Lake City, UT</p>
                                    </div>
                                    <div className="level-right">
                                        <p className="level-item heading">October 10, 2019</p>
                                        <p className="level-item heading">8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <p class="title">Three</p>
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