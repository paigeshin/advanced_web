var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function(){
    if(XHR.readyState === 4 && XHR.status === 200) {
        console.log(XHR.responseText);
        //code 4 => Operation Complete
    }
};

XHR.open("GET", "https://api.github.com/zen");
XHR.send();