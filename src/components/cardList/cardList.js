import React, { Component } from 'react';
import  './card-list.css';
import Card from '../card/card';

class CardList extends Component {
render(){
    return (
        <div className='card-list'>
        {this.props.users.map(user => (
            <Card key={user.id} user={user} />
        ))}
        </div>
    );
}
}
export default CardList;