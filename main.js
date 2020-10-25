'use strict';

import MovieTitle from './MovieTitle.js';
import Trailer from './Trailer.js';

const headerList = new MovieTitle();
const trailer = new Trailer();


const requestURL = './test.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = ()=>{
    const res = request.response;
    headerList.makeHeaderList(res);
    trailer.makeVideo(res);
    headerList.autoScroll();
}


