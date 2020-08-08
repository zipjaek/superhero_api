import React from 'react';

import './SearchBox.css';
import searchImage from '../../assets/images/image.png';

const searchbox = (props) => (
    <div className='search-box'>
        <input
            className="search-txt"
            type='text'
            placeholder='Type to search...'
            value={props.input} 
            onChange={props.updated} />
        <img
            className='search-btn' 
            src={searchImage} alt='' 
            onClick={props.clicked}></img>
    </div>
);

export default searchbox;