import React from 'react';
import Game from './Game';

export default function Schedule(props) {
    return (
        <div className="tile is-vertical is-parent">
            <div className="tile is-child title">
                Schedule
            </div>
            {props.games.map((game, i) => <Game game={game} key={i} />)}
        </div>
    );
}