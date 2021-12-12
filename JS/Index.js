function antes(numero) {
    let home1 = document.querySelector("#home");
    let proyectos = document.querySelector("#proyectos");
    let nos = document.querySelector("#nos");
    let contacto = document.querySelector("#contacto");

    if (numero == home1){
        home1.innerHTML = "HOME";
    }
    else if (numero == proyectos){
        proyectos.innerHTML = "PROYECTOS";
    }
    else if (numero == nos){
        nos.innerHTML = "NOSOTRAS";
    }
    else{
        (numero == contacto)
          contacto.innerHTML = "CONTACTO";
        }
}
function despues(numero) {
    let home1 = document.querySelector("#home");
    let proyectos = document.querySelector("#proyectos");
    let nos = document.querySelector("#nos");
    let contacto = document.querySelector("#contacto");

    if (numero == home1){
        home1.innerHTML = "001";
    }
    else if (numero == proyectos){
        proyectos.innerHTML = "002";
    }
    else if (numero == nos){
        nos.innerHTML = "003";
    }
    else{
        (numero == contacto)
          contacto.innerHTML = "004";
        }
}

(function($){
    $(window).on("load",function(){
        $(".mCustomScrollbar").mCustomScrollbar();
    });
})(jQuery);

$(".content").mCustomScrollbar({
    theme:"dark"
});