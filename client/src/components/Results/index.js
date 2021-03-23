Import React, { Component } from "react";
Import API from "../../utils/API";
//import API 

/**
 * Render a List Group of all books passed in the props.books array.
 *
 * Also takes an `action` prop to determine the action performed by
 * the secondary button in the element. Valid values are `save`
 * and `delete`.
 *
 * The handleBookAction prop is executed when clicking the action button.
 *
 */


Class Results extends Component {
    state = {
        savedBooks: [],
    }

    ComponentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    HandleSave = book => {

        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
                .catch(err => console.error(err));
        }
    }

     render() {
        return (
            <div className="results">
                <h1>{this.props.status}</h1>

                {this.props.books.map(book => (
                    <div className="result-box" key={book.link}>
                        <hr />
                        <div className="row">
                            <div className="col-md-8">
                                <p className="title">{book.title}</p><br />
                                <p className="authors">Written By: {book.authors.map(author => (<span key={author}>{author} </span>))}</p>
                            </div>
                            <div className="col-md-4">
                                <div className="buttonDiv">
                                <a className="view btn" href={book.link} target="_blank" rel="noopener noreferrer">View</a>
                                    <button className="save btn" onClick={() => this.handleButton(book._id)} style={this.props.buttonColor}>{this.props.buttonText}</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={book.image} alt="book cover" />
                            </div>
                            <div className="col-md-10">
                                <p className="description">{book.description}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>

        )
    }
};


Export default Results;
