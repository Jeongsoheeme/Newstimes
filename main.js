

const getLatestNews =async()=>{
    let url = new URL(`https://api.newscatcherapi.com/vs/latest_headlines?countries=US&topic=business&page_size=2`);
    let header = new Headers({'x-api-key':'5S0-ZbVwEuPY3VCOCZiQRbrO0tfE2ShW7_38rQiAFmk'});

    let response = await fetch(url,{headers: header });
    console.log(response);

};

getLatestNews();