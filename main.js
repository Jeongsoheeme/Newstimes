let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach(menu=> menu.addEventListener("click", (event)=>getNewsByTopic(event) ))

let searchButton = document.getElementById("search-button");




const getLatestNews = async()=>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10`);
    let header = new Headers({'x-api-key':'C2DcVWEX9pANNudnpY7oGXXtfK7spQ3yXQQQdEf4mpA',});
    
    // 데이터보내는방식 3가지 : ajax, http, fetch
    //async(비동기)와 await는 세트!
    let response = await fetch(url,{headers:header}); 
    let data = await response.json();
    news = data.articles
    console.log(news);

    render()
<<<<<<< HEAD
};

const getNewsByTopic = async (event) =>{
    console.log("클릭됨",event.target.textContent);
    let topic = event.target.textContent.toLowerCase()
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);
    let header = new Headers({'x-api-key':'C2DcVWEX9pANNudnpY7oGXXtfK7spQ3yXQQQdEf4mpA',});
    let response = await fetch(url,{headers:header});
    let data = await response.json();
    news=data.articles;
    console.log(news);

    render()
};

const getNewsByKeyword = async() => {
    //1.검색키워드읽어오기
    //2.url에 검색 키워드 붙이기
    //3.헤더준비
    //4.url부르기
    //5.데이터 가져오기
    //6.데이터 보여주기
    let keyword = document.getElementById("search-input").value;
    let url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
    let header = new Headers({'x-api-key':'C2DcVWEX9pANNudnpY7oGXXtfK7spQ3yXQQQdEf4mpA',});
    let response = await fetch(url,{headers:header});
    let data = await response.json();
    news=data.articles;
    console.log(news);

    render()
}


const render = () => {
    let newsHTML = "";
    newsHTML = news
    .map(item => {
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>${item.rights} / ${item.published_date}</div>
        </div>
    </div>`
    }).join('');

    document.getElementById("news-board").innerHTML=newsHTML
};

searchButton.addEventListener("click",getNewsByKeyword);
=======
};

const render = () => {
    let newsHTML = "";
    newsHTML = news
    .map(item => {
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>${item.rights} / ${item.published_date}</div>
        </div>
    </div>`
    }).join('');

    document.getElementById("news-board").innerHTML=newsHTML
}

>>>>>>> 19e1eef20fb352cef7a9cff60fb7e70f75038fd5
getLatestNews();