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
    autoScroll(e){
        const headerTitle = document.querySelectorAll('.movie__title');
        const movieTrailer = document.querySelectorAll('.video__container');
        
        for(let i = 0; i < headerTitle.length; i++){
            headerTitle[i].addEventListener('click',(e)=>{
                e.preventDefault();
                movieTrailer[i].scrollIntoView({behavior:'smooth'});
            })
        }
    }
}


