import { Route, Link, useRouteMatch } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardContent,
    CardImage,
} from 'bloomer';

const BookCard = (props) => {
    const { author } = props;
    const { url } = useRouteMatch();
    console.log('Book is: ', author)
    console.log('Url is: ', url)

    return (
        <li>
                <Card>
                    <CardHeader className='is-flex is-justify-content-center'>
                        <h1>
                            {author[0].author_name}
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <CardImage>
                            <img src="https://picsum.photos/200" alt="a"/>
                        </CardImage>
                        <p>
                            Is most recognized for {author[0].title}, published by {author[0].publisher[0]}.
                        </p>
                    </CardContent>
                </Card>
        </li>
    )
}

export default BookCard;