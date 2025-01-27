// Create web server and listen on port 8080
// Use express.js framework
// Use body-parser to parse the request body
// Use mongodb to store the data
// Use mongoose to interact with mongodb
// Use ejs as template engine
// Use nodemon to watch the changes of source code and restart the server
// Use bootstrap to style the web page
// Use jQuery to make the web page interactive
// Use AJAX to make the web page dynamic
// Use font-awesome to make the web page more beautiful
// Use moment.js to format the date
// Use socket.io to make the web page real-time
// Use passport.js to authenticate the user
// Use bcrypt.js to hash the password
// Use express-session to store the user session
// Use connect-flash to display the flash message
// Use connect-mongo to store the session in mongodb
// Use method-override to use PUT and DELETE method
// Use express-sanitizer to sanitize the input

// 1. Install the required modules
// npm install express body-parser mongodb mongoose ejs nodemon bootstrap jquery moment socket.io passport bcrypt express-session connect-flash connect-mongo method-override express-sanitizer

// 2. Create the file structure
// comment
// ├── public
// │   ├── css
// │   │   └── style.css
// │   └── js
// │       └── script.js
// ├── views
// │   ├── index.ejs
// │   ├── login.ejs
// │   └── register.ejs
// ├── app.js
// └── comment.js

// 3. Create the HTML template
// <!-- views/index.ejs -->
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Comment</title>
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
//   <link rel="stylesheet" href="/css/style.css">
// </head>
// <body>
//   <div class="container">
//     <h1>Comment</h1>
//     <div class="row">
//       <div class="col-md-4">
//         <div class="panel panel-default">
//           <