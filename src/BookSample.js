import React from 'react';
import { Card, Button } from 'antd'

const { Meta } = Card;

const BookSample = (props) => {
	return (
		<Card 
			className="bookCard"
			cover={
				<img style={{ margin: '40px 0px 0px 0px', width: 100, height: 'auto'}} alt={props.title} src={props.img} />}
			style={{ width: 400, display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}
			
		>
			<Meta 
				style={{ 
					width: 200,
					display: 'flex',
					textAlign: 'justify',
					flexDirection: 'column' 
				}}
				title={props.title}
				description={props.description}
			/>
				<Button 
					onClick={props.previewLink}
					style={{ marginTop: 20, borderRadius: 5}} 
					type="primary">See this Book
				</Button>       
			
		</Card>
	);
};

export default BookSample;