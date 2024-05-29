var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname == "/") {
        // Serve homepage.html
        fs.readFile('homepage.html', function(err, data) {
            if (err) {
                console.error("Error reading homepage.html:", err);
                response.writeHead(404, { 'Content-Type': 'text/html' });
                return response.end("404 Not Found");
            }  
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            return response.end();
        });
    } else if (pathname == "/studentpage") {
        // Serve studentpage.html
        fs.readFile('studentpage.html', function(err, data) {
            if (err) {
                console.error("Error reading studentpage.html:", err);
                response.writeHead(404, { 'Content-Type': 'text/html' });
                return response.end("404 Not Found");
            }  
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            return response.end();
        });
    } else if (pathname == "/facultypage") {
        // Serve facultypage.html
        fs.readFile('facultypage.html', function(err, data) {
            if (err) {
                console.error("Error reading facultypage.html:", err);
                response.writeHead(404, { 'Content-Type': 'text/html' });
                return response.end("404 Not Found");
            }  
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            return response.end();
        });
    } else if ((pathname == "/submit-student" || pathname == "/submit-faculty") && request.method === 'POST') {
        // Handle form submission for student or faculty information
        var formData = '';
        request.on('data', function(chunk) {
            formData += chunk.toString();
        });

        request.on('end', function() {
            // Redirect to the homepage after form submission
            response.writeHead(302, { 'Location': '/' });
            response.end();
            
            // Parse form data
            var parsedFormData = qs.parse(formData);
            console.log("Form data received:", parsedFormData);
        });
    } else {
        // Handle invalid requests
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end("404 Not Found");
    }
});

server.listen(4004, function() {
    console.log('Server is running on port 4004');
});
