'use strict';

let indexCrawler = require('./lib/index_crawler');

const baseUrl = 'http://rpgmapshare.com/piwigo/gallery/index.php?/category/58';
const lastPage = 36;
const itemsPerPage = 15;
const pagerSuffixUrl = '/start-';

for (let i = 0; i < lastPage; i++) {
    let url = baseUrl;
    if (0 !== i) {
        url += pagerSuffixUrl;
        url += i * itemsPerPage;
    }
    indexCrawler.queue(url);
}
