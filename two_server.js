// Require/import the HTTP module
var http = require("http");
// Define a port to listen for incoming requests
var PORT = 8000;
// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
function handleRequest2(request, response){
    response.end("Your shirt is loud!" + request.url);
}

var serverTwo = http.createServer(handleRequest2);


// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
serverTwo.listen(PORT2, function(){
    console.log("server listening on: " + PORT2)
})

function displayRoot(url, req, res){
  var myHTML = "<html>" + 
    "<body><h1>Home Page</h1>" + 
    "<a href='/portfolio'>Portfolio</a>" +
    "</body></html>";
}

res.writeHead(200, {
  "Content-Type": "text/html"};

  res.end(myHTML);
}
function displayPortfolio(url, req, res){
  var myHTML = "<html>" +
  "<body><h1>404 Not Found </h1>" +
  "<p>The Page you are looking for: " + url + " can not be found</p>" + "</body></html>";
}

res.writeHead(404, {"Content-Type": "text/html"})
res.end(myHTML);
}