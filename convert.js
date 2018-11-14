//********************************Temperatura*********************************************/
function celsius() {
    var ce = document.conv.Te1.value;//Celsius
    ce = parseInt(ce ,10);
    document.conv.Te2.value = (ce * 9/5) + 32 ; //Faharenheit
    document.conv.Te3.value = (ce + 273.15);//Kelvin 
}

function fahrenheit() {
    var fa = document.conv.Te2.value; //Faharenheit
    //fa = parseInt(fa ,10);    
    document.conv.Te1.value = (fa - 32) * (5/9); //Celsius
    document.conv.Te3.value = (fa - 32 ) * (5/9) + 273.15 ;//Kelvin    */
}

function kelvin() {
    var ke = document.conv.Te3.value;//Kelvin
    document.conv.Te1.value = ke - 273.15 ;//Celsius
    document.conv.Te2.value = (ke - 273.15) * (9/5) + 32; //Faharenheit       
}
//******************************************************Velocidad*********************************/
function metrosxseg(){
    var ms = document.conv.Ve1.value;//Métros x Segundo
    document.conv.Ve2.value = ms * 3.6;// Kilometros x Hora
    document.conv.Ve3.value = ms * 2.237; // Millas por Hora 
}

function kmxhora(){
   var kh =  document.conv.Ve2.value; // Kilometros x Hora
   document.conv.Ve1.value = kh / 3.6;// Métros x Segundo
   document.conv.Ve3.value = kh / 1.609; // Millas por Hora 
}

function millxhora(){
    var mh = document.conv.Ve3.value;
    document.conv.Ve1.value = mh / 2.237;// Métros x Segundo
    document.conv.Ve2.value = mh / 1.609;//Kilometros x Hora
}
//******************************************************Distancias*********************************/
function centimetros(){
    var cm = document.conv.Di1.value;
    document.conv.Di2.value = cm /100;//Metros
    document.conv.Di3.value = cm /10000 ;//Kilometros
    document.conv.Di4.value = cm /160934.4 ;//Millas
    document.conv.Di5.value = cm /91.44   ;//Yardas
    document.conv.Di6.value = cm /30.48  ;//Pies
    document.conv.Di7.value = cm /2.54 ;//Pulgadas
    document.conv.Di8.value = cm * 10;//Milímetros
    document.conv.Di9.value = cm * 10000000 ;//Nanómetros
}

function metros(){
 var me = document.conv.Di2.value;
 document.conv.Di1.value = me *100 ;//Centimetros
document.conv.Di3.value = me /1000 ;//Kilometros
document.conv.Di4.value = me /1609.344 ;//Millas
document.conv.Di5.value = me * 1.094   ;//Yardas
document.conv.Di6.value = me  * 3.281;//Pies
document.conv.Di7.value = me  *  39.37;//Pulgadas
document.conv.Di8.value = me * 1000;//Milímetros
document.conv.Di9.value = me * 1000000000 ;//Nanómetros

}

function kilometros(){
   var km = document.conv.Di3.value;
   document.conv.Di1.value = km * 100000 ;//Centimetros
   document.conv.Di2.value = km * 1000 ;//Metros
   document.conv.Di4.value = km /1.609;//Millas
   document.conv.Di5.value = km * 1093.613;//Yardas
   document.conv.Di6.value = km  * 3280.84  ;//Pies
   document.conv.Di7.value = km  *  39370.07   ;//Pulgadas
   document.conv.Di8.value = km * 1000000;//Milímetros
   document.conv.Di9.value = km * 1000000000000 ;//Nanómetros
     
}

function millas(){
var mi = document.conv.Di4.value;
document.conv.Di1.value = mi * 160934.4;//Centimetros
document.conv.Di2.value = mi * 1609.344;//Metros
document.conv.Di3.value = mi * 1.609;//Kilometros
document.conv.Di5.value = mi * 1760;//Yardas
document.conv.Di6.value = mi  * 5280  ;//Pies
document.conv.Di7.value = mi  *  63360 ;//Pulgadas
document.conv.Di8.value = mi * 1609000;//Milímetros
document.conv.Di9.value = mi * 1609000000000 ;//Nanómetros
}

function yardas(){
    var ya = document.conv.Di5.value;
    document.conv.Di1.value = ya * 91.44    ;//Centimetros
    document.conv.Di2.value = ya /1.094    ;//Metros
    document.conv.Di3.value = ya /1093.613 ;//Kilometros
    document.conv.Di4.value = ya /1760 ;//Millas
    document.conv.Di6.value = ya * 3  ;//Pies
    document.conv.Di7.value = ya * 36 ;//Pulgadas
    document.conv.Di8.value = ya * 914.4 ;//Milímetros
    document.conv.Di9.value = ya * 914400000;//Nanómetros
    
}

function pies(){
    var pi = document.conv.Di6.value;
    document.conv.Di1.value = pi * 30.48    ;//Centimetros
    document.conv.Di2.value = pi / 3.281    ;//Metros
    document.conv.Di3.value = pi / 3280.84 ;//Kilometros
    document.conv.Di4.value = pi /5280 ;//Millas
    document.conv.Di5.value = pi / 3 ;//Yardas*****
    document.conv.Di7.value = pi * 63360 ;//Pulgadas
    document.conv.Di8.value = pi * 1609000 ;//Milímetros
    document.conv.Di9.value = pi * 1609000000000;//Nanómetros

}

function pulgadas(){
    var pu = document.conv.Di7.value;
    document.conv.Di1.value = pu * 2.54       ;//Centimetros
    document.conv.Di2.value = pu / 39.37      ;//Metros
    document.conv.Di3.value = pu / 39370.079  ;//Kilometros
    document.conv.Di4.value = pu / 63360    ;//Millas
    document.conv.Di5.value = pu / 36 ;//yardas
    document.conv.Di6.value = pu / 12 ;//Pies
    document.conv.Di8.value = pu * 25.4 ;//Milímetros
    document.conv.Di9.value = pu * 25400000;//Nanómetros

}

function milimetros(){
    var mi = document.conv.Di8.value;
    document.conv.Di1.value = mi /10  ;//Centimetros
    document.conv.Di2.value = mi / 1000      ;//Metros
    document.conv.Di3.value = mi / 1000000  ;//Kilometros
    document.conv.Di4.value = mi / 1609000    ;//Millas
    document.conv.Di5.value = mi / 914.4 ;//yardas
    document.conv.Di6.value = mi / 304.8 ;//Pies
    document.conv.Di7.value = mi / 25.4 ;//Pulgadas
    document.conv.Di9.value = mi * 1000000;//Nanómetros

}

function nanometros(){
    var na = document.conv.Di9.value;
    document.conv.Di1.value = na / 100000        ;//Centimetros
    document.conv.Di2.value = na / 1000000000      ;//Metros
    document.conv.Di3.value = na / 1000000000    ;//Kilometros
    document.conv.Di4.value = na / 1609000000000    ;//Millas
    document.conv.Di5.value = na / 9144000000000      ;//yardas
    document.conv.Di6.value = na / 304800000        ;//Pies
    document.conv.Di7.value = na / 2540000         ;//Pulgadas
    document.conv.Di8.value = na / 1000000      ;//Milímetros

}
//******************************************************Masas*********************************/
function gramos(){
    var gr = document.conv.Ma1.value; //Gramos
    document.conv.Ma2.value = gr / 1000 ;//Kilos
    document.conv.Ma3.value = gr / 1000000 ;//Toneladas
    document.conv.Ma4.value = gr * 1000 ;//Miligramos 
    document.conv.Ma5.value = gr  / 28.35;//Onzas
    document.conv.Ma6.value = gr  /453.592 ;//Libras
}

function kilos(){
    var ki = document.conv.Ma2.value; //Kilos
    document.conv.Ma1.value = ki * 1000 ;//Gramos
    document.conv.Ma3.value = ki / 1000 ;//Toneladas
    document.conv.Ma4.value = ki * 1000000 ;//Miligramos 
    document.conv.Ma5.value = ki  * 35.274;//Onzas
    document.conv.Ma6.value = ki  * 2.205;//Libras
}

function toneladas(){
    var to = document.conv.Ma3.value; //Toneladas
    document.conv.Ma1.value = to * 1000000 ;//Gramos
    document.conv.Ma2.value = to * 1000 ;//Kilos
    document.conv.Ma4.value = to * 1000000000 ;//Miligramos 
    document.conv.Ma5.value = to  * 35273.962;//Onzas
    document.conv.Ma6.value = to  * 2204.623;//Libras
}

function miligramos(){
    var to = document.conv.Ma4.value; //miligramos
    document.conv.Ma1.value = to / 1000 ;//Gramos
    document.conv.Ma2.value = to / 1000000 ;//Kilos
    document.conv.Ma3.value = to / 1000000000 ;//Toneladas 
    document.conv.Ma5.value = to / 28349.523 ;//Onzas
    document.conv.Ma6.value = to / 453592.37;//Libras
}

function onzas(){
    var on = document.conv.Ma5.value; //Onzas
    document.conv.Ma1.value = on * 28.35 ;//Gramos
    document.conv.Ma2.value = on / 35.274 ;//Kilos
    document.conv.Ma3.value = on / 35273.962 ;//Toneladas 
    document.conv.Ma4.value = on * 28349.523 ;//Miligramos
    document.conv.Ma6.value = on / 16;//Libras
}

function libras(){
    var li = document.conv.Ma6.value; //Libras
    document.conv.Ma1.value = li * 453.592   ;//Gramos
    document.conv.Ma2.value = li  / 2.205    ;//Kilos
    document.conv.Ma3.value = li /  2204.623 ;//Toneladas 
    document.conv.Ma4.value = li * 453592.37 ;//Miligramos
    document.conv.Ma5.value = li * 16;//Onzas
}
//******************************************************Volúmenes*********************************/
function mililitros(){
    var mi = document.conv.Vo1.value; //Mililitros
    document.conv.Vo2.value = mi /1000   ;//Litros
    document.conv.Vo3.value = mi  / 3785.412 ;//Galónes
    document.conv.Vo4.value = mi /  240 ;//Tazas 
    document.conv.Vo5.value = mi / 14.787 ;//Cucharadas
    document.conv.Vo6.value = mi / 4.929  ;//Cucharaditas
}

function litros(){
    var mi = document.conv.Vo2.value; //Litros
    document.conv.Vo1.value = mi * 1000   ;//Mililitros
    document.conv.Vo3.value = mi  / 3.785 ;//Galónes
    document.conv.Vo4.value = mi *  4.167 ;//Tazas 
    document.conv.Vo5.value = mi * 67.628 ;//Cucharadas
    document.conv.Vo6.value = mi * 202.884;//Cucharaditas
}

function galones(){
    var ga = document.conv.Vo3.value; //Galones
    document.conv.Vo1.value = ga * 3785.412   ;//Mililitros
    document.conv.Vo2.value = ga  * 3.785 ;//Litros
    document.conv.Vo4.value = ga *  15.773 ;//Tazas 
    document.conv.Vo5.value = ga * 256 ;//Cucharadas
    document.conv.Vo6.value = ga * 768;//Cucharaditas
}

function tazas(){
    var ta = document.conv.Vo4.value; //Tazas
    document.conv.Vo1.value = ta * 240     ;//Mililitros
    document.conv.Vo2.value = ta  /  4.167 ;//Litros
    document.conv.Vo3.value = ta /  15.773 ;//Galones
    document.conv.Vo5.value = ta * 16.231  ;//Cucharadas
    document.conv.Vo6.value = ta * 48.692  ;//Cucharaditas
}

function cucharadas(){
    var cu = document.conv.Vo5.value; //Cucharadas
    document.conv.Vo1.value = cu * 14.787  ;//Mililitros
    document.conv.Vo2.value = cu  /  67.628;//Litros
    document.conv.Vo3.value = cu /  256 ;//Galones
    document.conv.Vo4.value = cu / 16.231 ;//Tazas
    document.conv.Vo6.value = cu * 3 ;//Cucharaditas
}

function cucharaditas(){
    var cu = document.conv.Vo6.value; //Cucharaditas
    document.conv.Vo1.value = cu *  4.929 ;//Mililitros
    document.conv.Vo2.value = cu  /  202.884    ;//Litros
    document.conv.Vo3.value = cu /  768 ;//Galones
    document.conv.Vo4.value = cu / 48.692;//Tazas
    document.conv.Vo5.value = cu / 3 ;//Cucharada
}