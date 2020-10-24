'user strict';

export default class Trailer{
    constructor(){
        this.moviePack = document.querySelector('.movie__movie');
    }
    makeVideo(res){
        for(let item in res){
            this.videoContainer = document.createElement('div');
            this.videoContainer.setAttribute('class','video__container');
            
            this.videoInfo = document.createElement('div');
            this.videoInfo.setAttribute('class','video__info');
            this.videoName = document.createElement('span');
            this.videoName.setAttribute('class','video__name');
            this.videoDirector = document.createElement('span');
            this.videoDirector.setAttribute('class','video__director');
            this.videoName.innerText = res[item].name;
            this.videoDirector.innerText = res[item].director;
            this.videoContainer
            .appendChild(this.videoInfo)
            .appendChild(this.videoName)
            .after(this.videoDirector);

            this.videoRatio = document.createElement('div');
            this.videoRatio.setAttribute('class','video__ratio');
            this.iframe = document.createElement('iframe');
            this.iframe.setAttribute('src',res[item].trailer);
            this.moviePack
                .appendChild(this.videoContainer)
                .appendChild(this.videoRatio)
                .appendChild(this.iframe);
        }
    }
}