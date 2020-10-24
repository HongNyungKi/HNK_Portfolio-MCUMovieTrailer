'use strict';

export default class MovieTitle{
    constructor(){
        this.movieMovie = document.querySelector('.movie__movie');
        this.headerList = document.querySelector('.header__list');
    }
    makeHeaderList(res){
        for(let item in res){ 
        this.movieTitle = document.createElement('li');
        this.movieTitle.setAttribute('class','movie__title');
        this.movieTitle.innerText = item;
        this.headerList.appendChild(this.movieTitle);
        }
    }
}