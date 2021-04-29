import { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};

		// this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((user) => this.setState({ monsters: user }))
			.then((st) => console.log(this.state))
			.catch((err) => console.log('Error found!'));
	}

	handleChange(e) {
		this.setState({ searchField: e.target.value });
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App'>
				<h1 className='heading'>Monster Info!!</h1>
				<SearchBox
					placeholder='Search monsters'
					handleChange={this.handleChange.bind(this)}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
