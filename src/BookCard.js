import React from 'react';
import { Card, Button } from 'antd'

const BookCard = (props) => {
	const { volumeInfo } = props.info;
	const { title, authors, previewLink } = props.info.volumeInfo;
	const thumbNail = volumeInfo.hasOwnProperty('imageLinks') === false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
	const publisher = volumeInfo.hasOwnProperty('publisher') === false ? 'Not known' : volumeInfo.publisher
	const publishedDate = volumeInfo.hasOwnProperty('publishedDate') === false ? 'Not known' : volumeInfo.publishedDate.substring(0, 4);
	return (

		<Card
			className="bookCard"
			style={{ margin: 20}}
			cover={<img className="thumbnail" alt={title} src={thumbNail}/>}
		>
			<div className="cardContent">
				<p style={{ fontWeight: 'bold'}}>{title}</p>
				<p style={{ fontWeight: 'bold' }}>By: {authors}</p>
				<p style={{ fontWeight: 'light' }}>Published by: {publisher}</p>
				<p style={{ fontWeight: 'light' }}>Date of publication: {publishedDate}</p>
				<Button
					style={{ marginTop: 20, borderRadius: 5 }}
					type="primary"><a href={previewLink}>See this book</a>
				</Button>
			</div>
			
		</Card>


	);
}

export default BookCard;