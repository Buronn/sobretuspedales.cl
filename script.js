data = {                                                            //DATA TEMPLATE WITHOUT VIDEOS
    "lugares": [
        {
            "lugar": "Santiago",
            "autor": "Carolina",
            "video": "IEUOVEOsrwk",
            "x": 37,
            "y": 30

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
            "autor": "Daniela",
            "video": "U-9B6kTNMPg",
            "x": 25,
            "y": 41

        },
        {
            "lugar": "Estación Central",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"
        },
        {
            "lugar": "Maipú",
            "autor": "Cristián",
            "video": "kBRuzzX7pys",
            "x": 15,
            "y": 47

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
            "autor": "Álvaro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ",
            "x": 12,
            "y": 27
        },
        {
            "lugar": "Quinta Normal",
            "autor": "Pedro",
            "video": "https://www.youtube.com/embed/q-_5ZQ-_5ZQ"

        }
    ]

}
function startAllAnimations() {
    //add class to elements

    $("#progress").addClass("progress");
    $("#progress-value").addClass("progress-value");
    $("#stgo").addClass("fade-in");
    $("#stgo").addClass("delay-4");
    //añadir animación a todas las bicis
    $(".bike").addClass("drop-in zoom delay-7");
    $("#title").addClass("title");
    $("#pedal1").addClass("rotate1");
    $("#pedal2").addClass("rotate2");


}
function aboutUs() {
    Swal.fire({
        title: 'Sobre tus pedales',
        html: "<div style='  text-align: justify; text-justify: inter-word;'><p>Sobre tus pedales es un docuweb interactivo que trata del vivir como ciclista en las calles y comunas de Santiago. Se enfoca en la misma acción de moverse, utilizando videos desde el punto de vista de la bicicleta en conjunto de diversos sonidos evocativos narrados por diferentes personajes que forman parte de este estilo de vida.</p>" +
        "<p>Nuestra intención con este docuweb es explorar el ciclismo como una especie de disidencia al momento de movernos por la ciudad, no solo por estilo de vida saludable, sino como una alternativa al transporte y como una forma de autogestión. El espacio que toca ocupar no es ni de peatón, ni de vehículo motorizado, es una ambivalencia poco reconocida e incluso despreciada por aquellos que no forman parte de esta forma de vivir el espacio. De esta manera, surge la necesidad de reunir relatos y memorias en torno a la bicicleta y a los propios territorios.</p>" +
        
        "<p>Equipo técnico: </p>\n" +
         "<ul>" +
        "<li>Dirección: Sebastián Meléndez Millaqueo</li>" +
        "<li>Producción: Patricio Guzmán Bello</li>" +
        "<li>Dirección de fotografía: Miguel Del Peso</li>" +
        "<li>Sonido: Evelyn Gormaz, Ignacio Oliva</li>" +
        "<li>Propuesta interactiva: Andrés Croquevielle</li>" +
        "<li>Diseñador web: Fernando Burón"+
        "</ul></div>"
    })
}
// resize check
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
// hidding scrollY
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
const pedal1 = document.getElementById("pedal1");
const pedal2 = document.getElementById("pedal2");

window.onload = function () {
    $("#audio")[0].volume = 0;
    document.addEventListener('keypress', musicPlay);
    document.addEventListener('click', musicPlay);
    function musicPlay() {
        $("#audio")[0].volume = 0.1;
        $("#audio")[0].play();
        //volume

        document.removeEventListener('click', musicPlay);
    }

}
async function rotateAt(i) {
    $("#pedal1").css("transform", "rotateY(" + i + "deg)");
    $("#pedal2").css("transform", "rotateY(" + i + "deg)");
}
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform") ||
        obj.css("-ms-transform") ||
        obj.css("-o-transform") ||
        obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[8];
        var b = values[10];
        var angle = Math.round(Math.atan2(a, b) * (180 / Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}


document.addEventListener("DOMContentLoaded", function () {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    //dont do anything until key is pressed
    "keypress click".split(" ").forEach(function (e) {
        document.addEventListener(e, function () {
            startAllAnimations();
            const btn = document.querySelector(".btn");


            //delete h1 with class start
            $(".start").remove();
            setTimeout(function () {
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
            }, 1000);

            document.querySelectorAll('.bike').forEach(item => {
                item.addEventListener('animationend', event => {
                    item.style.opacity = 1;
                    if (item == document.querySelectorAll('.bike')[0]) {
                        let progress = document.getElementsByClassName("progress")[0];
                        //delete progress
                        progress.parentNode.removeChild(progress);
                    }
                })
            })
            document.getElementById("title").addEventListener('animationend', event => {
                document.getElementById("title").style.opacity = 1;
                document.getElementById("title").style.top = "2%";
                document.getElementById("title").style.left = "2%";
                document.getElementById("title").style.transform = "scale(0.6)";
                document.getElementById("pedal1").classList.add("rotate");
                document.getElementById("pedal2").classList.add("rotate");
            })
        });
    });

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
async function fadeOutVolume(audio) {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    let actual = audio.volume;
    for (let i = audio.volume; i >= 0; i -= actual / 10) {
        audio.volume = i;
        await sleep(100);
    }
}
async function fadeInVolume(audio, newVolume) {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    for (let i = 0; i <= newVolume; i += newVolume / 10) {
        audio.volume = i;
        console.log("new volume " + i);
        await sleep(100);
    }
}

function addBike(id) {
    fadeOutVolume($("#audio")[0]);
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
        html: "<iframe allow='fullscreen;' id='yt' style='position: sticky;width: " + map.offsetWidth * 0.4 + "px" + ";height: " + map.offsetHeight * 0.3 + "px" + ";' src='https://www.youtube.com/embed/" + actual.video + "'>",
        showCloseButton: true,
        overflowY: 'hidden',
        backdrop: false,
        height: map.offsetHeight * 0.4 + "px",
        width: map.offsetWidth * 0.5 + "px",
        target: document.getElementById(idiv),
        background: 'rgba(88, 125, 255)',
        customClass: {
            container: 'position-absolute slow-animation',
        },
        showConfirmButton: false,
    }).then(function () {
        fadeInVolume($("#audio")[0], 0.1);
        document.body.removeChild(document.getElementById(idiv));
    });
}