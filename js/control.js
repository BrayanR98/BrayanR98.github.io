 import {prueba} from './stilodiassemana.js'
 
 
 
 

 var cabecera = document.getElementById("main")
 let imgcabeza = document.getElementById("imgcabeza")
 let cabeceramcorreo = document.getElementById("cabeceraEmail")//cabecera modal correo
 let modalemailc = document.getElementById("modalemailc") // body modal correo
 let btncorreo = document.getElementById("btncorreo") //boton envio mail
 let fmcorreo = document.getElementById("fmcorreo")//footer modal correo

 function obtenerStilo() {    
var Xmas95 = new Date(Date.now());
//   var dia = Xmas95.getDay()
 var dia = 4
  

  if(dia % 2 == 0){
    Stilo1()
    
  }else{
    cambioStilo()
    
  }

 }

 function Stilo1(){
    
    imgcabeza.src= "img/netsinfondo.png"
    imgcabeza.classList.add("m-5")
    imgcabeza.borderRadius= "100%"
    imgcabeza.style.width= "30%"
    imgcabeza.style.height= "70%"
    //modal correo
    cabeceramcorreo.style.backgroundColor = '#909497';
    modalemailc.style.background='#34495E ';
    fmcorreo.style.backgroundColor = '#909497';
    btncorreo.classList.add('btn-primary')
    
    cabecera.style.backgroundImage=  `url(${"jgif/estrellas.gif"})`

    
 }
/* var Xmas95 = new Date(Date.now());
  var dia = Xmas95.getDay()
  var cabecera = document.getElementById("main")
  let imgcabeza = document.getElementById("imgcabeza")
  let cabeceramcorreo = document.getElementById("cabeceraEmail")//cabecera modal correo
  let modalemailc = document.getElementById("modalemailc") // body modal correo
  let btncorreo = document.getElementById("btncorreo") //boton envio mail
  let fmcorreo = document.getElementById("fmcorreo")//footer modal correo
  console.log("oelo")
  console.log(3 % 2)
  if(dia % 2 == 0){
    
  }else{
    cambioStilo()
  }*/
    
       
    
  function cambioStilo() {
//   var Xmas95 = new Date(Date.now());
//   var numerodia = Xmas95.getDay()
  //console.log(numerodia)
    //stilos body
    let body = document.getElementById("body")
    body.style.background='#BFC9CA';
    //estilo modal correo
    //cabecera   
    cabeceramcorreo.classList.add("morado");
    //cuerpo
    modalemailc.style.background='#BFC9CA';
    btncorreo.classList.add('morado')
    //footer   
    fmcorreo.classList.add("morado");
    // estilos barra navegacion
    let barra = document.getElementById("barra")
    barra.classList.remove("bg-light")
    barra.classList.add("morado")
    //estilos cabecera de imagen
    
    imgcabeza.src= "img/logoc.png"
    imgcabeza.classList.add("m-5")
    imgcabeza.style.width= "30%"
    imgcabeza.style.height= "70%"
    //estilos contenedor quien soy
    let quienSoy = document.getElementById("qs")
    quienSoy.style.color= 'black'
    let titulo = document.getElementById("quiensoy")
    titulo.style.color='#8E44AD'
    //estilos btn ver cv
    let vercv = document.getElementById("vercv")
    vercv.style.color='black'
    vercv.classList.remove("btn-primary")
    vercv.classList.add("morado")
    //estilos circulo foto personal
    let fotocv = document.getElementById("fotocv2")
    fotocv.style.borderRadius = '100%'
    fotocv.style.border='5px ridge #8E44AD'

    //stilo titulo habilidades
    let hablidades = document.getElementById("habilidades")
    habilidades.style.color='#8E44AD'
    //estilos footer
    let footer = document.getElementById("scrollspyHeading3")
    footer.style.background = '#8E44AD'
    //estilos foto footer
    let fotofooter= document.getElementById("fotofooter")
    fotofooter.style.width='100%'
    fotofooter.style.height='100%'
    fotofooter.style.borderRadius='100%'
    fotofooter.style.border='2px inset white'

  }
  
function pintarcards() {
    let habilidades=[
        {
            imagen:"img/html,css,js.jpg",
            id:0,
            
        },
        {
            imagen:"img/phpymysql.png",
            id:1
        },
        
        {
            imagen:"img/sql2.jfif",
            id:2
        },
        {
            imagen:"img/vs1.jfif",
            id:3
        }
    
    ]
    
    let cards = document.getElementById("cards")

    habilidades.forEach(function (producto) {
        
         //1. comience a crear la estructura que necesite
       
         let columna = document.createElement("div")
         
         columna.classList.add("col")
         columna.classList.add("text-center")
        // columna.setAttribute("data-bs-toggle","modal")
         //columna.setAttribute("data-bs-target","#staticBackdrop")
         
         // creo la tarjeta 
         let tarjeta = document.createElement("div")
         tarjeta.classList.add("card")
         tarjeta.classList.add("h-100")
         
    
        let foto = document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src= producto.imagen
        foto.classList.add("hover")
       
        let Id = document.createElement("p")
        Id.classList.add("idp")
        //Id.setAttribute("tabindex","-1")
        Id.textContent=producto.id
        //2. ordenar la estructura padres e hijo 
        //    a.appendChild(foto)
           foto.appendChild(Id)
           tarjeta.appendChild(foto)
           columna.appendChild(tarjeta)
           cards.appendChild(columna)                
    
     });    


}
document.addEventListener('DOMcontentload',
    pintarcards(),
    obtenerStilo()
   
 )
//proyectos
let proyectos =[{
    id:0,
    tec:"html,css,js",
    nombre:"paginas web",
    fotos:["img/proyectosweb/portafolio.png","img/proyectosweb/portafolio1.png"],
    descripcion:"paginas web con html,css y js dinamicas por ejemplo este proyecto cambia el diseño segundia par o inpar... proximamente tendra 7 diseños para cada dia de la semana."},
    {
    id:1,
    tec:"php,mysql,html,css",
    nombre:"parqueadero",
    fotos:["img/proyectoparqueadero/inicio_parqueadero.png","img/proyectoparqueadero/menu_park.png","img/proyectoparqueadero/reg_empleado_parqueadero.png",
    "img/proyectoparqueadero/regcliente.png","img/proyectoparqueadero/registrovehiculo.png","img/proyectoparqueadero/darSalida.png","img/proyectoparqueadero/registrovehiculo.png","img/proyectoparqueadero/buscar.png"],
    descripcion:"proyecto de parqueadero, realizado con php,html,css y js conectado a una base de datos en mysql. Maneja sesiones de empleado para registrar ingreso, salidas de vehiculo y calcular el cobro"},
    {
        id:2,
        tec:"SQL SERVER",
        nombre:"Bases de datos",
        fotos:["img/proyectosbd/diagramasbd.png","img/proyectosbd/procedimientosAlmacenados.png","img/proyectosbd/triggers.png","img/proyectosbd/vistas.png"],
        descripcion:"creacion de bases de datos relacionales y no relacionales, instrucciones DDL y DML,triggers,vistas,procedimientos almacenados"},
    {
    id:3,
    tec:"C#,ASP.NET Core",
    nombre:"Hospital",
    fotos:["img/proyectoHospital/inicioHospital.png","img/proyectoHospital/citas.png","img/proyectoHospital/listapacientes.png",
    "img/proyectoHospital/registromedico.png","img/proyectoHospital/listamedicos.png"],
    descripcion:"Proyecto realizado en ASP.NET  con C#  es una aplicacion web para un hospital con crud sencillos de registro de usuarios conectado base de datos SQLserver con EntityFramework como ORM"}

]
//evento modal para ver proyectos segun lenguaje
cards.addEventListener("click",async (evento)=>{
        if(evento.target.classList.contains("card-img-top")){

       //console.log(evento.target.firstElementChild.textContent)
        let d = parseInt(evento.target.firstElementChild.textContent);
        //let TituloTecnologia = document.getElementById("tecnologia");
        let tituloproyecto = document.getElementById("tituloproyecto");
        let fotop = document.getElementById("fotop");
        let descpro = document.getElementById("descppro");
        let proyecto={}
        
        
                proyecto =proyectos[d]
                
                console.log( proyecto)
               
               document.getElementById("tecnologia").innerHTML=proyecto.tec
                tituloproyecto.textContent= proyecto.nombre
                let img = fotop.querySelector('.tfotop')
                let cont=0
                
                img.src =await proyecto.fotos[0]

                //funcion para slider imagenes de proyectos
                function carrusel (){
                    fotop.addEventListener('click',(e)=>{
                        
                        let atras = fotop.querySelector('.atras')
                        let adelante = fotop.querySelector('.adelante')
                        
                        let tgt = e.target;
                        
                        if(atras == tgt){
                            
                            if(cont>0){
                                img.src =   proyecto.fotos[cont-1]
                                cont--
                            }else{
                                img.src = proyecto.fotos[proyecto.fotos.length - 1]
                                cont = proyecto.fotos.length - 1
                            }
                        }else if(adelante == tgt){
                            if(cont<proyecto.fotos.length-1){
                                img.src = proyecto.fotos[cont+1]
                                cont++
                            }else{
                                img.src = proyecto.fotos[0]
                                cont = 0
                            }
                        }
                        
                    })
                }
                carrusel()
                
                descpro.textContent = proyecto.descripcion
    
        let modalinfo = new bootstrap.Modal(document.getElementById('staticBackdrop'))
        //cargar informaciond el producto dentro del modal
       // producto=ampliarInformacion(evento)
        modalinfo.show()
    }
    
})

//ANIMACIONES DE SCROLL

 document.addEventListener('scroll',function (){
let scrollTop = document.documentElement.scrollTop;
let navbar= document.querySelector("nav");
       // console.log(navbar.offsetTop)
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

              animado.style.visibility= "visible";
              habilidadesh1.style.visibility= "visible";

              animado.classList.add("animaciontop");
              habilidadesh1.classList.add("animacionthab")           
         }else{
              habilidadesh1.style.opacity=0;
              animado.style.opacity = 0;           
              animado.style.visibility="hidden";
              habilidadesh1.style.visibility="hidden";         
             animado.classList.remove("animaciontop");
             habilidadesh1.classList.remove("animacionthab")
          }  


    let descripcionquiensoy = document.getElementById("qs");
    let aldesqsoy = descripcionquiensoy.offsetTop;
          if(aldesqsoy-400 < scrollTop){
              descripcionquiensoy.style.opacity = 1;
              descripcionquiensoy.style.visibility = "visible";
              descripcionquiensoy.classList.add("animacionleft")           
          }else{
            descripcionquiensoy.style.opacity=0;
            descripcionquiensoy.style.visibility="hidden";         
            descripcionquiensoy.classList.remove("animacionleft")
          }

    let fotocv = document.getElementById("fotocv");
    let altfotcv = fotocv.offsetTop;
          if(altfotcv-400<scrollTop){
              fotocv.style.opacity=1;
              fotocv.style.visibility="visible";           
              fotocv.classList.add("animacionright");
          }else{
               fotocv.style.opacity=0;
               fotocv.style.visibility="hidden";           
              fotocv.classList.remove("animacionright");
          }

    let footer = document.getElementById("scrollspyHeading3")    
    let altfot= footer.offsetTop;
        if(altfot-400 < scrollTop){
            footer.style.opacity=1;
            footer.style.visibility="visible";
            footer.classList.add("animefoot");
        }else{
             footer.style.opacity=0;
             footer.style.visibility="hidden";
            footer.classList.remove("animefoot");
        }
});

