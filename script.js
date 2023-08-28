/*funcion del menu*/
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}

var splide = new Splide( '.seccion', {
    direction: 'ttb',
    height   : '10rem',
    wheel    : true,
  } );
  
  splide.mount();