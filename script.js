data = {                                                            //DATA TEMPLATE WITHOUT VIDEOS
    "lugares": [
        {
            "lugar": "Santiago",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ",
            "x": 40,
            "y": 35

        },
        {
            "lugar": "Conchalí",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ",
            "x": 0,
            "y": 0
        },
        {
            "lugar": "Huechuraba",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ",
            "x": 45,
            "y": 18
        },
        {
            "lugar": "Independencia",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ",
            "x": 70,
            "y": 30

        },
        {
            "lugar": "Quilicura",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ",
            "x": 25,
            "y": 15
        },
        {
            "lugar": "Recoleta",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Renca",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Las Condes",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Lo Barnechea",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Providencia",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Vitacura",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "La Reina",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Macul",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Ñuñoa",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Peñalolén",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "La Florida",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "La Granja",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "El Bosque",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "La Cisterna",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "La Pintana",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "San Ramón",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Lo Espejo",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Pedro Aguirre Cerda",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {

            "lugar": "San Joaquín",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"

        },
        {
            "lugar": "San Miguel",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Cerrillos",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Estación Central",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Maipú",
            "autor": "Cristián",
            "video": "fjdpg04CdbE",
            "x": 15,
            "y": 50

        },
        {
            "lugar": "Cerro Navia",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ",
            "x": 25,
            "y": 50
        },
        {
            "lugar": "Lo Prado",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Pudahuel",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Quinta Normal",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"

        }
    ]

}
//constantly rezise the div
window.onresize = function () {

    var bikes = document.getElementsByClassName("bike");
    var map = document.getElementById("stgo");
    //position bikes in different porcentages of the map
    for (var i = 0; i < bikes.length; i++) {
        var mapHeight = map.offsetHeight;
        var mapWidth = map.offsetWidth;
        var mapPosition = map.getBoundingClientRect();
        var bike = bikes[i];
        var bikeIdInt = parseInt(bike.id);

        //offset when scrolling
        var Xoffset = window.pageXOffset;

        bike.style.top = (mapPosition.top + (mapHeight * data.lugares[bikeIdInt].y / 100)) + "px";
        bike.style.left = (mapPosition.left + Xoffset + (mapWidth * data.lugares[bikeIdInt].x / 100)) + "px";
    }
}
window.addEventListener('DOMSubtreeModified', function () {
    var swalcontainer = document.querySelector(".swal2-container");
    if (swalcontainer) {
        // Found it, do something
        console.log("found");
        //wait 2 seconds and do
        setTimeout(function () {
            swalcontainer.style.overflowY = "hidden";
        }, 400);
    }
}, false);

document.addEventListener("DOMContentLoaded", function () {

    var bikes = document.getElementsByClassName("bike");
    var map = document.getElementById("stgo");
    //position bikes in different porcentages of the map
    for (var i = 0; i < bikes.length; i++) {
        var mapHeight = map.offsetHeight;
        var mapWidth = map.offsetWidth;
        var mapPosition = map.getBoundingClientRect();
        var bike = bikes[i];
        var bikeIdInt = parseInt(bike.id);

        //offset when scrolling
        var Yoffset = window.pageYOffset;
        var Xoffset = window.pageXOffset;

        bike.style.top = (mapPosition.top + (mapHeight * data.lugares[bikeIdInt].y / 100)) + "px";
        bike.style.left = (mapPosition.left + Xoffset + (mapWidth * data.lugares[bikeIdInt].x / 100)) + "px";
    }
});
const slider = document.querySelector('html');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;

});
slider.addEventListener('mouseup', () => {
    isDown = false;

});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});


function addBike(id) {

    var bike = document.getElementById(id);
    //get top and left position of the element
    var topPosition = bike.offsetTop;
    var leftPosition = bike.offsetLeft;
    //delete any other elements with the same class
    var elements = document.getElementsByClassName("popup-div");
    for (var i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    //create div above the element
    var map = document.getElementById("stgo");
    var newDiv = document.createElement("div");
    idiv = "div" + id;
    newDiv.setAttribute("id", idiv);
    newDiv.className = "popup-div";
    newDiv.style.position = "absolute";
    newDiv.style.top = topPosition + "px";
    newDiv.style.left = leftPosition + "px";
    newDiv.style.height = map.offsetHeight * 0.5 + "px";
    newDiv.style.width = map.offsetWidth * 0.5 + "px";
    newDiv.style.opacity = "1";
    newDiv.style.zIndex = "2";

    //add location icon above the bike
    var newImg = document.createElement("img");
    newImg.setAttribute("src", "./img/location-red.gif");
    newImg.style.height = map.offsetHeight * 0.1 + "px";
    newImg.style.width = map.offsetWidth * 0.06 + "px";
    newImg.style.position = "absolute";
    newImg.style.top = - map.offsetHeight * 0.1 + "px";
    newImg.style.left = - map.offsetWidth * 0.01 + "px";
    newImg.style.zIndex = "3";
    //append image to document
    newDiv.appendChild(newImg);

    document.body.appendChild(newDiv);
    //delete div
    actual = data.lugares[id];
    //to uppercase

    Swal.fire({
        title: '<div style="position:relative;text-align:left;color:#FFFFFF;font-family: Arial;font-size:3vh"><strong>' + actual.autor.toUpperCase() + '\n' + actual.lugar + '</strong></div>',
        html: "<iframe id='yt' style='position: sticky;width: " + map.offsetWidth * 0.4 + "px" + ";height: " + map.offsetHeight * 0.3 + "px" + ";' src='https://www.youtube.com/embed/" + actual.video + "'>",
        showCloseButton: true,
        overflowY: 'hidden',
        backdrop: false,
        height: map.offsetHeight * 0.4 + "px",
        width: map.offsetWidth * 0.5 + "px",
        target: document.getElementById(idiv),
        background: 'rgba(88, 125, 255)',

        customClass: {
            container: 'position-absolute'
        },
        showConfirmButton: false,
    }).then(function () {
        document.body.removeChild(document.getElementById(idiv));
    });
}