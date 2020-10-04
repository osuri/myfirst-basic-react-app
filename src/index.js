import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/cardList/cardList';
import SearchComponent  from './components/searchComponent/searchComponent';
import'./index.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            searchField: '',
        }
    }
    componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then(users => this.setState({
        users: users
    }))
    .catch(error=> console.log(error))
    }
    handleChange = e => {
        this.setState({searchField: e.target.value})
    }
    
        render() {
        const { users, searchField } = this.state;
        const filtererdUsers = users.filter(user=>user.name.toLowerCase().includes(searchField.toLowerCase()))
        console.log(searchField, 'fil')
        return (
        <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchComponent   
        placeholder='search monster' 
        handleChange={this.handleChange} />
        <CardList users={filtererdUsers} />
        </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);