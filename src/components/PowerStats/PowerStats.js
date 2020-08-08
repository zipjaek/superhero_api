import React, { Component } from 'react';
import axios from 'axios';

import './PowerStats.css';

class PowerStats extends Component {
    state = {
        loadedItem: null
    }

    componentDidUpdate () {
        if (this.props.id) {
            if (!this.state.loadedItem || (this.state.loadedItem && this.state.loadedItem.id !== this.props.id)) {
                axios.get('/'+this.props.id)
                .then(response => {
                    this.setState({loadedItem: response.data})
                })
            }
        }
    }

    render () {
        let powerstats = <p>Please select a card...</p>;
        if (this.props.id) {
            powerstats = <p>Loading...</p>;
        }
        if (this.state.loadedItem) {
             powerstats = (
                 <div className='powerstats'>
                    <div className='split left'>
                        <img className='image' src={this.state.loadedItem.image.url} alt='' />
                    </div>
                    <div className='split right'>
                        <table className='table'> 
                            <tbody>
                                <tr>
                                    <th style={{textAlign: 'right', fontFamily: 'Arial Black, Gadget, sans-serif'}}>{this.state.loadedItem.name}</th>
                                </tr>  
                                <tr>
                                    <td>FullName: </td>
                                    <td>{this.state.loadedItem.biography['full-name']}</td>
                                </tr>
                                <tr>
                                    <td>Intelligence: </td>
                                    <td>{this.state.loadedItem.powerstats.intelligence}</td>
                                </tr>
                                <tr>
                                    <td>Strength: </td>
                                    <td>{this.state.loadedItem.powerstats.strength}</td>
                                </tr>    
                                <tr>
                                    <td>Speed: </td>
                                    <td>{this.state.loadedItem.powerstats.speed}</td>
                                </tr>
                                <tr>   
                                    <td>Durability: </td>
                                    <td>{this.state.loadedItem.powerstats.durability}</td>
                                </tr>
                                <tr>
                                    <td>Power: </td>
                                    <td>{this.state.loadedItem.powerstats.power}</td>
                                </tr>
                                <tr>
                                    <td>Combat: </td>
                                    <td>{this.state.loadedItem.powerstats.combat}</td>
                                </tr>
                            </tbody> 
                        </table>
                    </div>
                </div>
            );
        }
    return powerstats;
    }
};

export default PowerStats;