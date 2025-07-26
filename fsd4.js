const url = require('url');

const sampleUrl = 'https://www.example.com:8080/path/name?user=john&age=25#section1';

const parsedUrl = new URL(sampleUrl);

console.log('URL Components:');
console.log('Protocol:', parsedUrl.protocol);
console.log('Full URL:', parsedUrl.href);
console.log('Host:', parsedUrl.host);
console.log('Hostname:', parsedUrl.hostname);
console.log('Port:', parsedUrl.port);
console.log('Search:', parsedUrl.search);
console.log('Search Params:', Object.fromEntries(parsedUrl.searchParams.entries()));
console.log('Hash:', parsedUrl.hash);    
console.log('Path:', parsedUrl.pathname);