import React from 'react';
import { Card, Button } from 'antd'
import { bold } from 'ansi-colors';

const { Meta } = Card;

const BookCard = (props) => {
	const { volumeInfo } = props.info;
	const { title, authors } = props.info.volumeInfo;
	const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;

	return (

		<Card
			className="bookCard"
			style={{ margin: 10}}
			cover={<img	className="thumbnail" alt={title} src={thumbNail} />}
		>
			<Meta
				style={{
					width: 200,
					display: 'flex',
					textAlign: 'justify',
					flexDirection: 'column',
					fontWeight: bold,
					fontSize: 20
				}}
				title={title}
				authors={authors}
			/>
			<Button
				onClick={props.previewLink}
				style={{ marginTop: 20, borderRadius: 5 }}
				type="primary">See this Book
				</Button>

		</Card>


	);
}

export default BookCard;