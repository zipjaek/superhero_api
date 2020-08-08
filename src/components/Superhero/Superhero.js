import React from 'react';

import './Superhero.css';

const superhero = (props) => (
    <article className='superhero' onClick={props.clicked}>
        <div className='data'>
            <img className='img' src={props.image} alt=''/>
            <h4>{props.name}</h4>
        </div>
    </article>
);

export default superhero;