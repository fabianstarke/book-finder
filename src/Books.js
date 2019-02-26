import React, { Component, Fragment } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import BookList from './BookList'
import 'antd/dist/antd.css';

class Books extends Component {
	constructor(props) {
		super(props)

		this.state = {
			books: [],
			searchField: ''
		}
	}


	searchBook = () => {
		axios.get(`https://www.googleapis.com/books/v1/volumes?q={this.searchField}`)
		 .then(res => {
			 console.log(res)
			 this.setState({ books: [...res.data.items]})
		 	 console.log(this.state.books)
	})
}
	handleSearch = e => {
		this.setState({ searchField: e.target.value})
	}

	render() {
		return (
			<Fragment>
				<SearchBar handleSearch={this.handleSearch} onSearch={this.searchBook}/>
				<BookList books={this.state.books}/>
			</Fragment>

		);
	}
}

export default Books;
