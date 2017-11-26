'use strict';

const http = require('http');
const fs = require('fs');
const Crawler = require('node-webcrawler');

const baseUrl = 'http://rpgmapshare.com/piwigo/gallery/';
const mapsDirectoryPath = './maps/';

let downloadPicture = ($) => {
    const src = $("#theMainImage").attr('src');
    let re = /\/([^\/]+\.\w+)/;
    const matches = re.exec(src);
    if (!matches || matches.length < 2) {
        return;
    }
    const fileName = matches[1];
    const filePath = mapsDirectoryPath + fileName;
    let file = fs.createWriteStream(filePath);
    const url = baseUrl + src;
    http.get(url, (response) => {
        response.pipe(file);
    });
    console.log("Downloading image into " + filePath);
};

module.exports = new Crawler({
    maxConnections: 10,
    callback: (error, result, $) => {
        if (error) {
            console.log(error);
        } else {
            try {
                downloadPicture($);
            } catch (e) {
                console.log(e);
            }
        }
    }
});
