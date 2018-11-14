/**************regla de 3 simple******************/
function simple(){
    var a = document.por.s1.value;
    var b = document.por.s2.value;
    var c = document.por.s3.value;
    var x = ( b * c ) / a;
     document.por.s4.value = x;

}

/**************regla de 3 inversa******************/
function inversa(){
    var a = document.por.s5.value;
    var b = document.por.s6.value;
    var c = document.por.s7.value;
    var x = ( a * b ) / c;
    document.por.s8.value = x;

}

/**************regla de 3 compuesta******************/
function compuesta(){
    var a = document.por.s9.value;
    var b = document.por.s10.value;
    var c = document.por.s11.value;
    var d = document.por.s12.value;
    var e = document.por.s13.value;
    var x =  (c*d*e)/(a*b);
    document.por.s14.value = x;
}

/****************Mensajes**********************/
function mensaje(msg){
    alert(msg);
}