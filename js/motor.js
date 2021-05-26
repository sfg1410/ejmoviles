
var varCambiar=true;
var productos=[
    {
        foto:"img/galaxyfront.png",
        front:"img/galaxyfront.png",
        back:"img/galaxyback.png",
        nombre:"Samsung Galaxy A50",
        pequeno:200,
        mediano:250,
        grande:300,
    },
    {
        foto:"img/huaweip30front.png",
        front:"img/huaweip30front.png",
        back:"img/huaweip30back.png",
        nombre:"Huawei P30 ",
        pequeno:185,
        mediano:215,
        grande:265,
    },
    {
        foto:"img/xperial3front.png",
        front:"img/xperial3front.png",
        back:"img/xperial3back.png",
        nombre:"Sony Xperia L3",
        pequeno:240,
        mediano:280,
        grande:320,
    },
    {
        foto:"img/xiaomi-redmi-note-8t-colores.png",
        front:"img/xiaomi-redmi-note-8t-colores.png",
        back:"img/xiaomi-redmi-note-8t-pantalla.png",
        nombre:"Xiaomi Redmi Note 8T",
        pequeno:190,
        mediano:240,
        grande:290,
    },
    {
        foto:"img/iphone-11-pantalla.png",
        front:"img/iphone-11-pantalla.png",
        back:"img/iphone-11-amarillo.png",
        nombre:"Iphone 11",
        pequeno:1000,
        mediano:1500,
        grande:2800,
    },
    {
        foto:"img/huawei-p-smart-z-frontal.png",
        front:"img/huawei-p-smart-z-frontal.png",
        back:"img/huawei-p-smart-z-azul.png",
        nombre:"Huawei P Smart Z",
        pequeno:210,
        mediano:260,
        grande:290,
    },
    {
        foto:"img/lg-v30-frontal.png",
        front:"img/lg-v30-frontal.png",
        back:"img/lg-v30-trasera.png",
        nombre:"LG v30",
        pequeno:180,
        mediano:250,
        grande:300,
    },
    {
        foto:"img/nokia-71-delantera.png",
        front:"img/nokia-71-delantera.png",
        back:"img/nokia-71-trasera.png",
        nombre:"Nokia 71",
        pequeno:250,
        mediano:300,
        grande:350,
    },
    {
        foto:"img/alcatel-1x-2019-financiado.png",
        front:"img/alcatel-1x-2019-financiado.png",
        back:"img/oferta-alcatel-1x-2019.png",
        nombre:"Alcatel 1X",
        pequeno:70,
        mediano:100,
        grande:130,
    },
    {
        foto:"img/samsung-galaxy-note10-lite.png",
        front:"img/samsung-galaxy-note10-lite.png",
        back:"img/galaxy-note-10-lite-colores.png",
        nombre:"Samsung Galaxy Note 10",
        pequeno:350,
        mediano:450,
        grande:600,
    },
]
var compras=[]
pintar();
numeroC=0;
function pintar() {
    for(let x=0; x<productos.length;x++){
        document.getElementById('container').innerHTML+=`<div id="cajaproductos">
        <div class="cajatlf">
            <div class="precio"><span id="cajaprecio${x}">${productos[x].mediano}</span>€</div>
            <div class="imagen">
                <img src="${productos[x].foto}" alt=""> 
            </div>
            <div class="imagenp">
                    <img src="${productos[x].front}" alt="">
                    <img src="${productos[x].back}" alt="">
            </div>
            
            <div class="detalle">
                <p>${productos[x].nombre}</p>
            </div>
            <div class="opciones">
                <div> <input type="radio" name="memoria${x}" id="memoriap${x}" onclick="cambiar64" ><p>64Gb</p></div>
               <div>  <input type="radio" name="memoria${x}" id="memoriam${x}" onclick="cambiar128" checked><p>128Gb</p></div>
               <div>  <input type="radio" name="memoria${x}" id="memoriag${x}" onclick="cambiar256" ><p>256Gb</p></div>
             </div>
            <div class="boton">
                <button onclick="anadirCarrito('${productos[x].nombre}',${productos[x].precio})">Comprar</button>
            </div>
        </div>
        </div> 
       
        `;
    }
}
function pintarpedido() {

    let contador=0;
    for(let x=0; x<productos.length;x++){
       
        
        contador+=total(`${x}`);
    }
    document.getElementById("totalpedido").innerHTML=contador+ "€";
}


// function devolvercheck(posicion) {
//     if(document.getElementById(`memoriap${posicion}`).checked){
//         return productos[posicion].pequen;
//     }
//     if(document.getElementById(`memoriam${posicion}`).checked){
//         return productos[posicion].mediano;
//     }
//     if(document.getElementById(`memoriag${posicion}`).checked){
//         return productos[posicion].grande;
//     }
    
// }

function comprar(posicion) {
    let valor;
    if(document.getElementById(`memoriap${posicion}`).checked){
        valor=productos[posicion].pequeno;
        memoriatlf='64Gb'
    }
    if(document.getElementById(`memoriam${posicion}`).checked){
        valor=productos[posicion].mediano;
        memoriatlf='128Gb'
    }
    if(document.getElementById(`memoriag${posicion}`).checked){
        valor=productos[posicion].grande;
        memoriatlf='256Gb'
    }
    pedido.push({nombre:productos[posicion].nombre, precio:valor, memoria:memoriatlf, foto:productos[posicion].foto });

}

function total(posicion) {
    return productos[posicion].precio;
}
function anadirCarrito( nombreP ,precioP){
    numeroC++;
 document.getElementById('pedido').innerHTML=numeroC;
  
    alert("Artículo añadido al Carrito " + nombreP);
   
   this.compras.push({nombre:nombreP, precio:precioP});
   }
   
   function listarCarrito() {
       document.getElementById('contenedorCarrito').innerHTML="";
       for(let x=0;x<compras.length;x++){
           document.getElementById('contenedorCarrito').innerHTML+=`<div class="cajaCarrito"><div>${compras[x].nombre} </div>
                                                                    <div>${compras[x].precio}  </div>
                                                                    </div>` ;
       }
       
   }
   function cambiar64(posicion) {
       let valor=productos[posicion].pequeno;
       document.getElementById(`precio${posicion}`).innerHTML=valor;
   }
   function cambiar128(posicion) {
    let valor=productos[posicion].mediano;
    document.getElementById(`precio${posicion}`).innerHTML=valor;
}
function cambiar256(posicion) {
    let valor=productos[posicion].grande;
    document.getElementById(`precio${posicion}`).innerHTML=valor;
}