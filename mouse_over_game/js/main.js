document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos=0;
var tiempo=30;
var puntosObjetivo=30;

function sumarPuntos(){      // esta funcion lo que se encarga es de sumar los puntos incrementandolos
 puntos++;         
 
 let ranNum= Math.round(Math.random()*500);
 let ranNum2= Math.round(Math.random()*500);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum+"px";
 if(puntos==30){              // si se llega a el 30 entonces que me muestre que gane 
     alert("ganaste");
 }
}

function restarTiempo(){       // Esta funcion lo que se encarga es de restar o decrementar el tiempo hasta llegar a cero
    tiempo--;
    document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";   // esto se encarga de mostrar el puntaje 
    document.getElementById("time").innerHTML=" Tiempo: "+tiempo+ " ";      // esto se encarga de mostrar el tiempo 
    if(tiempo==0){            //esta condicion lo que hace es de que si el tiempo es = 0 me muestre que perdi
        alert("Perdiste!");
        tiempo=30;
        puntos=0;
    }
}

setInterval(restarTiempo,700);     //se encarga de dar el intervalo de tiempo de la cuenta regresiva