let ubicacionPrincipal = window.pageYOffset
window.addEventListener("scroll", function (){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByClassName("header")[0].style.top="0px"
    }
    else{
        document.getElementsByClassName("header")[0].style.top="-100px"
    }
    ubicacionPrincipal=desplazamientoActual
})


      



