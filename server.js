const express = require('express');
const mysql = require('mysql2');

// Create an Express application
const app = express();

const connection = mysql.createConnection({
    host: 'localhost', // Replace 'localhost' with your MySQL host
    user: 'root', // Replace 'username' with your MySQL username
    password: 'Kime141618!', // Replace 'password' with your MySQL password
    database: 'shopdb' // Replace 'database_name' with your MySQL database name
  });
  
  // Connect to MySQL
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

  app.get('/products', (req, res) => {
    // Query MySQL for user information
    connection.query('SELECT * FROM products', (err, results) => {
      if (err) {
        console.error('Error querying MySQL:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.json(results); // Send the query results back to the client as JSON
    });
  });
  
  // Start the server
const port = 3000; // You can change this to any port you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  