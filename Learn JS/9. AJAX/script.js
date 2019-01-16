document.getElementById("btn").addEventListener("click", load);

function load() {
    //create xhr object
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open("GET", "sample.txt", true);

    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
        }
    }
    //sends request
    xhr.send();
}

// function load() {
//     fetch("https://crossorigin.me/https://www.metaweather.com/api/location/2487956/")
//     .then(result => {
//         console.log(result);

//     })
// }
