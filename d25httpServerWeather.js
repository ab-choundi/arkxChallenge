// Upgrade your existing HTTP server code to include a new route for the "/weather" endpoint.
// When a request is made to the "/weather" endpoint, extract the city name from the query parameter.
// Use the city name to retrieve the weather temperature for that city from a weather API.
// Include the weather temperature in the response to the client.
// Ensure that the server handles potential errors gracefully and returns appropriate error messages if the city is not found or if there are any issues with the weather API request.
// Test the functionality by making requests to the "/weather" endpoint with different city names as query parameters.


const http = require('http');

// Create a server instance
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js Server!\n');
});

// Listen on a specific port and IP
const PORT = 3000;
const IP = '127.0.0.1';

server.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}/`);
});
