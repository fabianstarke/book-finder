import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Spin } from 'antd'
import SearchBar from './SearchBar'
import BookList from './BookList'
import 'antd/dist/antd.css';

const URL = 'https://www.googleapis.com/books/v1/volumes?'
const key = 'AIzaSyAPeT8woXpS36DkQwVhD_nFzplQty1WZ7k'

class Books extends Component {
	constructor(props) {
		super(props)

		this.state = {
			books: [],
			searchField: '',
			loading: false
		}
	}

	searchBook = () => {
		this.setState({ loading: true})
		axios.get(`${URL}q=${this.state.searchField}&key=${key}`)
		 .then(res => {
			 console.log(res)
			 this.setState({ books: [...res.data.items], loading: false})
	})
}
	handleSearch = e => {
		this.setState({ searchField: e.target.value})
	}

	render() {
		const { books, loading } = this.state;
		return (
			<Fragment>
				<SearchBar handleSearch={this.handleSearch} onSearch={this.searchBook}/>
				{loading && <div className="spinner"><Spin size="large" /></div>}
				<BookList books={books} />
				
			</Fragment>

		);
	}
}

export default Books;
