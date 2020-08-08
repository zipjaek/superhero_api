import React, { Component } from 'react';
import axios from 'axios';

import SearchBox from '../../components/SearchBox/SearchBox';
import Superhero from '../../components/Superhero/Superhero';
import Modal from '../../components/UI/Modal/Modal';
import PowerStats from '../../components/PowerStats/PowerStats'
import './Item.css';


class Item extends Component {
    state = {
        superheroes: [],
        error: false,
        search: '',
        selectedId: null,
        displaying: false
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    searchSuperheroes = () => {
        let name = this.state.search;        
        axios.get('search/'+name)
            .then( response => {
                if (response.data.response === 'error') {
                    this.setState({error: true})
                } else {
                    this.setState({error: false})
                    this.setState({superheroes: response.data.results});
                }       
            });
    }

    selectedHandler = (id) => {
        this.setState({selectedId: id, displaying: true});
    }

    backdropClickedHandler = () => {
        this.setState({displaying: false})
    }

    render () {
        let superheroes
        if (!this.state.error) {
             superheroes = this.state.superheroes.map(superhero => {
                return <Superhero 
                    key={superhero.id} 
                    name={superhero.name}
                    image={superhero.image.url}
                    clicked={() => this.selectedHandler(superhero.id)} />
            }); 
        } else {
            superheroes = <h1 className='error'>character with given name not found...</h1>
        }

        return (
            <div> 
                <Modal show={this.state.displaying} modalClosed={this.backdropClickedHandler}>
                    <PowerStats id={this.state.selectedId} />
                </Modal>
                <section>
                    <SearchBox 
                        input={this.state.search}
                        updated={this.updateSearch.bind(this)}
                        clicked={this.searchSuperheroes} />
                </section>
                <section className='item'>
                    {superheroes}
                </section>
            </div>
        );
    }
}

export default Item;