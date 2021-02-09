let ubicacionPrincipal = window.pageYOffset

window.addEventListener("scroll", function(){
    console.log(window.pageYOffset) 
    let desplazamietntoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamietntoActual){
        document.getElementsByTagName("nav")[0].style.top="0px"
    }
    else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicacionPrincipal=desplazamietntoActual
})