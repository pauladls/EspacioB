/*HEADER*/
document.querySelector(".header").innerHTML= `
<h5>ARQUITECTURA & DISEÑO</h5>
`
/*ASIDE1*/
document.querySelector(".containeraside1").innerHTML=`

<div>                        
<div>
    <i class="fas fa-angle-double-right"></i>
     <a class="cambio" id="home" onmouseover="antes(home)" onmouseout="despues(home)" href="index.html">001</a>
</div>
</div>
<div>                        
<div>
    <i class="fas fa-angle-double-right"></i>
     <a class="cambio" id="proyectos" onmouseover="antes(proyectos)" onmouseout="despues(proyectos)"  href="proyectos.html">002</a>
</div>
</div>

<div>                        
<div>
    <i class="fas fa-angle-double-right"></i>
     <a class="cambio" id="nos" onmouseover="antes(nos)" onmouseout="despues(nos)"  href="Quienessomos.html">003</a>
</div>
</div>
<div>                        
<div>
    <i class="fas fa-angle-double-right"></i>
     <a class="cambio" id="contacto" onmouseover="antes(contacto)" onmouseout="despues(contacto)"  href="contacto.html">004</a>
</div>
</div>
            `

/*ASIDE2*/
document.querySelector(".containeraside2").innerHTML=`
<div class="boxaside1">
<div><a id="icono" href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a></div>
<div><a id="icono" href="https://www.instagram.com/espaciob.arq/?hl=es"><i
    class="fab fa-instagram-square"></i></a></div>
<div><a href="mailto:espaciob.arq@gmail.com"><i class="fas fa-envelope"></i></a></div>
</div>
<div class="boxaside2">
<div>
    ES <br>
    PA <br> 
    CIO <br> 
    <div class="contlogo">
    <div id="lineafina"></div>
     <div>B.</div> 
</div>
</div>
</div>
`
/*FOOTER*/
document.querySelector(".containerfooter").innerHTML=`
<div>
   <i class="fas fa-map-marker-alt"></i> Rosario, Santa Fe, Argentina | </div>
<div> derechos reservados @ 2020</div>
                
  
`



/*LINKS ASIDE1*/

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


// function myFunction(proyectos) {
// object.addEventListener("touchstart", myFunction(proyectos));
// }


