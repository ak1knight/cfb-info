import React from 'react';
//import 'bulma';
import './styles/App.scss';
import logo from './img/Utah_Utes_logo.svg'

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
      <section class="hero is-primary is-bold" style={{backgroundImage: 'linear-gradient(141deg, #99001a 0%, #cc0000 71%, #e62600 100%)'}}>
        <div class="hero-body">
          <div class="container">
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <div>
                    <p class="title">
                      Utah Utes
                    </p>
                    <p class="heading">
                      Salt Lake City, Utah
                    </p>
                  </div>
                </div>
              </div>

              <div class="level-right">
                <div class="level-item">
                  <figure class="image is-128x128">
                    <img src={logo} />
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
                          <img src={logo} />
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
                          <img src={logo} />
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
                          <img src={logo} />
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
                          <img src={logo} />
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

export default App;
