'use strict';

const Crawler = require('node-webcrawler');
let pictureCrawler = require('./picture_crawler');

let crawlPictures = ($) => {
    $(".thumbnails a").each((index, that) => {
        let href = $(that).attr('href');
        let url = 'http://rpgmapshare.com/piwigo/gallery/' + href;
        pictureCrawler.queue(url);
    });
};

module.exports = new Crawler({
    maxConnections: 10,
    callback: (error, result, $) => {
        if (error) {
            console.log(error);
        } else {
            try {
                crawlPictures($);
            } catch (e) {
                console.log(e);
            }
        }
    }
});
