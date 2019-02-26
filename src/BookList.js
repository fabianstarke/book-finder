import React from 'react';
import BookSample from './BookSample'

const BookList = (props) => {
    return (
        <div className="list">
            {
							props.books.map(book => {
								return (
									<BookSample 
										key={book.volumeInfo.id} 
										description={book.volumeInfo.description} 
										title={book.volumeInfo.title} 
										previewLink={book.previewLink} 
										img={book.volumeInfo.ImageLinks.smallThumbnail}/>
							)})
						}
        </div>
    );
};

export default BookList;