'use strict';

const Crawler = require('node-webcrawler');
const url = require('url');

let c = new Crawler({
    maxConnections: 10,
    callback: (error, result, $) => {
        if (error) {
            console.log(error);
        } else {
            console.log($("title").text());
        }
    }
});

c.queue('http://www.amazon.com');
c.queue(['http://www.google.com/', 'http://www.yahoo.com']);
