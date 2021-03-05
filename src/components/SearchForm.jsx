import React, { Component } from 'react';
import BookCardList from './BookCardList'
import {
    Field,
    Label,
    Button,
    Input
} from 'bloomer';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            authorArray: []
        }
    }

    _onChange = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    _handleSubmit = async (event) => {
        event.preventDefault();
        const newAuthorData = await fetch (`http://openlibrary.org/search.json?author=${this.state.author}`)
            .then(response => response.json())
        this.setState({
            authorArray: [...this.state.authorArray, newAuthorData]
        });
    }

    render() {
        const { authorArray, author } = this.state;
        console.log("Author: ", (author));
        return(
            <>
                <form onSubmit={this._handleSubmit}>
                    <Field isGrouped style={{justifyContent: "center", marginTop: 20}}>
                        <Label>
                            <Input 
                                type="text"
                                name="author"
                                placeholder="Favorite Author Name"
                                value={this.state.author}
                                onChange={(event) => {
                                    this._onChange("author", event.target.value) 
                            }}
                            />
                        </Label>
                        <Button style={{margin: '0 20px'}}
                        className='center-button'
                        type='submit'
                        isColor='primary'>Submit</Button>
                        
                    </Field>
                </form>
                {!!authorArray.length ? <BookCardList authorArray={authorArray} /> : <p>No Users to display</p>}
            </>
        )
    }
}

export default SearchForm;