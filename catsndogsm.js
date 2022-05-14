var imgcat = document.getElementById("catpic");
    imgdog = document.getElementById("dogpic");

document.getElementById("btncats").addEventListener("click", function(){

    var url1 = `https://thatcopy.pw/catapi/rest/`;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url1, true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data1 = JSON.parse(xhr.responseText);

            imgcat.setAttribute("src", data1.url);
        }
    }

    xhr.send();
})

document.getElementById("btndogs").addEventListener("click", function(){

    var url2 = `https://dog.ceo/api/breeds/image/random`;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url2, true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data2 = JSON.parse(xhr.responseText);

            imgdog.setAttribute("src", data2.message);
        }
    }

    xhr.send();
})
