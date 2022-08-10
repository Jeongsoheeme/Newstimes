let news = [];

const getLatestNews = async()=>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10`);
    let header = new Headers({'x-api-key':'C2DcVWEX9pANNudnpY7oGXXtfK7spQ3yXQQQdEf4mpA',});
    
    // 데이터보내는방식 3가지 : ajax, http, fetch
    //async(비동기)와 await는 세트!
    let response = await fetch(url,{headers:header}); 
    let data = await response.json();
    news = data.articles
    console.log(news);
};

getLatestNews();