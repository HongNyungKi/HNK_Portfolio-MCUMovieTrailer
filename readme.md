introduce : 마블 시네마틱 유니버스(MCU) 영화의 트레일러영상을 세계관 순서대로 제공하는 앱입니다.

skills : vanila javascript / css / html

Good point : (참고사항: 웹서버에서 json 형식의 데이터를 받아왔다는 가정을하였습니다.)
        1. html(정보)을 직접 입력하지 않고, javascript를 활용하여 json 데이터를 활용하여 ui를 구성하였습니다. 
        2. javascript 를 module화 하여 코드의 가독성을 높였습니다. 

failing point : (참고사함: 반응형 디자인을 고려하지 않았습니다.)
        1. 트레일러 영상을 유뷰트 api를 이용하여 가져오도록하면 좋겠습니다.
        2. json데이터 처리를 async/await를 활용하여 비동기적인 최신방법으로 조작하고싶습니다.  
        3. js를 활용한 태그 생성을 최소화 하고, 코드의 가독성을 더 높이고싶습니다. 