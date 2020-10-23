const header = document.querySelector('header');
const section = document.querySelector('section');
const movieList = document.querySelector('.movie__list');
const movieMovie = document.querySelector('.movie__movie');

const requestURL = './test.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = ()=>{
    const res = request.response;
    for(let item in res){
        //영화 목록 
        const movieTitle = document.createElement('li');
        movieTitle.innerText = item;
        movieList.appendChild(movieTitle);
        //영화 소개 박스
        const moviePack = document.createElement('div');
        moviePack.setAttribute('class','movie__pack');
        const movieHeader = document.createElement('div');
        movieHeader.setAttribute('class','movie__header');
        //영화 소개 박스 - 헤더 영역
        const movieName = document.createElement('h2');
        movieName.innerText = res[item].name;
        movieName.setAttribute('class','movie__name');
        const movieDirector = document.createElement('p');
        movieDirector.innerText = res[item].director;
        movieDirector.setAttribute('class','movie__director');
        movieMovie.appendChild(moviePack).appendChild(movieHeader).appendChild(movieName);
        movieMovie.appendChild(moviePack).appendChild(movieHeader).appendChild(movieDirector);


    }

}


