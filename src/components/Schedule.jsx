import React from 'react';
import Game from './Game';

export default function Schedule(props) {
    return (
        <div class="tile is-vertical is-parent">
            <div class="tile is-child title">
                Schedule
            </div>
            {props.games.map((game, i) => <Game game={game} key={i} />)}
        </div>
    );
}