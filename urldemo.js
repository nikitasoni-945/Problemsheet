const url = require('url');

const address = 'http://localhost:3000/home?name=John&age=30';

const parsedUrl = url.parse(address, true);

console.log("Host:", parsedUrl.host);
console.log("Pathname:", parsedUrl.pathname);
console.log("Search string:", parsedUrl.search);
console.log("Query Params:", parsedUrl.query);
