/****************porcentaje sencillo**********************/
/*******el p1 (%) de p2 es ?? */
function porcentaje1(){
var p1 = document.por.p1.value;
var p2 = document.por.p2.value;
var p3 = (p1/100) *p2;
document.por.p3.value = p3;
}

/****************porcentaje variado**********************/
/*******si p4 es el 100% que % sería p5*/
function porcentaje2(){
    var p4 = document.por.p4.value;
    var p5 = document.por.p5.value;
    var p6 = (p5/100) * p4;
    document.por.p6.value = p6;
}


/****************Encontrar el 100%**********************/
/*******si p7 es el p8% cual es el 100%*/
function porcentaje3(){
    var p7 = document.por.p7.value;
    var p8 = document.por.p8.value;
    var p9 = (100/p8) * p7;
    document.por.p9.value = p9;
}

/****************Encontrar el 100%**********************/
/*******¿Que % es p10 de p11? Respuesta = p12*/
function porcentaje4(){
    var p10 = document.por.p10.value;
    var p11 = document.por.p11.value;
    var p12 = ( p10 / p11 )*100;
    document.por.p12.value = p12;
}

/****************Mensajes**********************/
function Mensaje(msg){
alert(msg);
}