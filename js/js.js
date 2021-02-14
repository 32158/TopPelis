let ubicacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", function (){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByClassName("header")[0].style.top="0px"
    }
    else{
        document.getElementsByClassName("header")[0].style.top="-100px"
    }
    ubicacionPrincipal=desplazamientoActual
});

var conte = document.getElementById("cont");

const datos=[{
    nombre:"Inmune (2020)",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/DxDIioCnlhjIL1vEhfrLTBg0VU.jpg",
    direccion:"ventana/Inmune-2020"
},
{
    nombre:"Mentes poderosas",
    imagen:"https://www.themoviedb.org/t/p/original/hHNxlhajOqKIYNTU2AEFuFmEJtx.jpg",
    direccion:"ventana/Mentes-poderosas"
},
{
    nombre:"Invasión: El fin de los tiempos",
    imagen:"https://www.themoviedb.org/t/p/original/8skHIUHUCEkWJ23q8mCSSR8SvYd.jpg",
    direccion:"ventana/Invasión-El-fin-de-los-tiempos"
},
{
    nombre:"Greenland: El último refugio",
    imagen:"https://www.themoviedb.org/t/p/original/ltlKaXvIHMTOgxqVbZSGUqcExuN.jpg",
    direccion:"ventana/pelicula(1)"
},
{
    nombre:"Wonder Woman 1984 (2020)",
    imagen:"https://www.themoviedb.org/t/p/original/oG8rC5WEUFEMsMeBLGJWspJ1Gp5.jpg",
    direccion:"ventana/pelicula(2)"
},
{
    nombre:"Soul (2020)",
    imagen:"https://www.themoviedb.org/t/p/original/jl8rZYy7JmbWlBlvDCfwvDmGO0g.jpg",
    direccion:"ventana/pelicula(3)"
},
{
    nombre:"American Pie Presents: Girls’ Rules",
    imagen:"https://www.themoviedb.org/t/p/original/ov1sd4gvHpoVheHuJHCXJjadeIT.jpg",
    direccion:"ventana/pelicula(11)"
},
{
    nombre:"Bob Esponja: Un héroe al rescate (2020)",
    imagen:"https://www.themoviedb.org/t/p/original/sp9fYcVbUHDFgGZpLvCSJsplfbd.jpg",
    direccion:"ventana/pelicula(6)"
},
{
    nombre:"Rápidos y Furiosos 9 (2021)",
    imagen:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qIicLxr7B7gIt5hxZxo423BJLlK.jpg",
    direccion:"ventana/pelicula(4)"
},
{
    nombre:"Minions: El origen de Gru (2021)",
    imagen:"https://www.themoviedb.org/t/p/original/asE7W6XInrfxZ24svc5k24DTpek.jpg",
    direccion:"ventana/pelicula(5)"
}
];


function dinamico(src,href,nombre){
    var divca = document.createElement("div");
    divca.className="imagen";
    
    var img = document.createElement("img");
    img.className="img"
    img.src=src 
    
    var a = document.createElement("a");
    a.href=href;
    a.className="a";

    var diva= document.createElement("div");
    diva.className="imagen-nom";
    
    var p = document.createElement("p");
    p.innerHTML= nombre;
    p.className="letra"


    divca.appendChild(a)
    a.appendChild(diva)
    diva.appendChild(img)
    a.appendChild(p)
    cont.appendChild(divca)
  

};
datos.forEach(({imagen,direccion,nombre}) => dinamico(imagen,direccion,nombre));




