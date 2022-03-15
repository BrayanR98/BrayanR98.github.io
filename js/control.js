 document.addEventListener('DOMcontentload',
 pintarcards()

  )
function pintarcards() {
    let habilidades=[
        {
            imagen:"img/html,css,js.jpg",
            descripcion:"comentario",
            url:"comentario"
        },
        {
            imagen:"img/phpymysql.png",
            descripcion:"comentario",
            url:"comentario"
        },
        {
            imagen:"img/javaandroid2.jpg",
            descripcion:"comentario",
            url:"comentario"
        },
        {
            imagen:"img/sql2.jfif",
            descripcion:"comentario",
            url:"comentario"
        },
        {
            imagen:"img/vs1.jfif",
            descripcion:"comentario",
            url:"comentario"
        }
    
    ]
    
    let cards = document.getElementById("cards")

    habilidades.forEach(function (producto) {
        
         //1. comience a crear la estructura que necesite
         // creo la columna
        //  let a = document.createElement("a")
        // //  a.classList.add("")
        //  a.href = producto.url

         let columna = document.createElement("div")
         columna.classList.add("col")
         // creo la tarjeta 
         let tarjeta = document.createElement("div")
         tarjeta.classList.add("card")
         tarjeta.classList.add("h-100")
         
    
        let foto = document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src= producto.imagen
    
    
    
    
        
    
        //2. ordenar la estructura padres e hijo 
        //    a.appendChild(foto)
           tarjeta.appendChild(foto)
           columna.appendChild(tarjeta)
           cards.appendChild(columna)                
    
     });    
}


document.addEventListener('scroll',function (){
let scrollTop = document.documentElement.scrollTop;
let navbar= document.querySelector("nav");
        console.log(navbar.offsetTop)
if (263<=scrollTop){
    navbar.classList.add("fixed-top");
}else{
    navbar.classList.remove("fixed-top")
}
let habilidadesh1 = document.getElementById("habilidades")
let animado = document.getElementById("cards");
let alturaAnimado = animado.offsetTop;
        // console.log(animado)
         if (alturaAnimado-400 < scrollTop) {
             
              habilidadesh1.style.opacity=1;
              animado.style.opacity = 1;
              animado.classList.add("animaciontop");
              habilidadesh1.classList.add("animacionthab")
              
         }else{
             habilidadesh1.style.opacity=0;
             animado.style.opacity = 0; 
             animado.classList.remove("animaciontop");
             habilidadesh1.classList.remove("animacionthab")
          }  


    let descripcionquiensoy = document.getElementById("qs");
    let aldesqsoy = descripcionquiensoy.offsetTop;
          if(aldesqsoy-400 < scrollTop){
              descripcionquiensoy.style.opacity = 1;
              descripcionquiensoy.classList.add("animacionleft")
          }else{
            descripcionquiensoy.style.opacity=0;
            descripcionquiensoy.classList.remove("animacionleft")
          }

    let fotocv = document.getElementById("fotocv");
    let altfotcv = fotocv.offsetTop;
          if(altfotcv-400<scrollTop){
              fotocv.style.opacity=1;
              fotocv.classList.add("animacionright");
          }else{
              fotocv.style.opacity=0;
              fotocv.classList.remove("animacionright");
          }

    let footer = document.getElementById("scrollspyHeading3")    
    let altfot= footer.offsetTop;
        if(altfot-400 < scrollTop){
            footer.style.opacity=1;
            footer.classList.add("animefoot");
        }else{
            footer.style.opacity=0;
            footer.classList.remove("animefoot");
        }
});

