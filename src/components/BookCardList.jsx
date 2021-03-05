import BookCard from './BookCard';

const BookCardList = (props) => {
    const { authorArray } = props;
    console.log(authorArray)

    return (
        <ul>
            {authorArray.map((author, index) => (
                <BookCard author={author.docs} key={index} />
            ))}
        </ul>
    )
}

export default BookCardList;
