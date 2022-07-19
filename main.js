

const getLatestNews =async()=>{
    let url = new URL(`https://api.newscatcherapi.com/v2/search?q=Apple&from='2022/07/19' &countries=KR&page_size=10`);
    let header = new Headers({'x-api-key':'C2DcVWEX9pANNudnpY7oGXXtfK7spQ3yXQQQdEf4mpA'});

    let response = await fetch(url,{headers: header });
    console.log(response);

};

getLatestNews();