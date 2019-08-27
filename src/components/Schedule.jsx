import React from 'react';
import Game from './Game';

export default function Schedule(props) {
    return (
        <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child title">
                Schedule
            </div>
            {props.games.map(game => <Game game={game} />)}
        </div>
    );
}