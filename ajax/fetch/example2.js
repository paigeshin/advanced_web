var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
    .then(function(response){
        console.log(response);
        return response.json()
    })
    .then(function(data){
        console.log(data.bpi.EUR.rate);
    });