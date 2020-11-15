import React from 'react';

import './card-list.style.css';


export const CardList = (props) => {
    return (
      <div className="card-list">
        {props.monsters.map((monster, i) => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
}