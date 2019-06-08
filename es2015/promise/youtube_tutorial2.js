const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
    .then(function(message){
        console.log(message);
    })
    .catch(function(err){

    });