
# Google Books Search
![Screenshot 2021-03-07 184410](https://user-images.githubusercontent.com/71414528/110267665-24c93780-7f75-11eb-93a5-d438e2b67c00.gif)







## Description


React-based Google Books Search app that displays books on user searches. Users can save them to review or purchase later. 

`Save` button to save the book to the database.<br>
`View` button to view the book on Google Books.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment 

This App is deployed on Heroku: [Google Books Search](https://books-search12.herokuapp.com/)

## Technologies used

MVC design pattern: Model, View, Controller.

<h2 align="center">
<img alt="mern" src="client/public/images/mern.jpg" width="50%">
</h2>

- [MongoDB](mongodb.com)
- [Express.js](https://expressjs.com)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)


- Search for books using the [Google Books API](https://developers.google.com/books/)

```javascript
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Delete book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Save book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },
  // Get saved books from the database
  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  }
```

