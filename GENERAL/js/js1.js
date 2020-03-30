//Probando la Keyword "typeof"
//No funciona con inpuys :(
function ej1(){ 
  var tipo = typeof document.getElementById("input1").value;
  document.getElementById("label1").innerHTML = tipo;
  document.getElementById("label1").style="display:inline";
};
//Usando una funcion para convertir grados Farenheit a Celsius
function ej2(){
  var temperatura = document.getElementById("input2").value;
  function toCelsius(fahrenheit){
      return (5/9) * (fahrenheit-32);
  }
  document.getElementById("label2").innerHTML = 
  `${toCelsius(temperatura)} °C`;
};
//Probando la Keyword "length"
function ej3(){
  let inputForm = document.getElementById("input3");
  let sizeText;
  sizeText = inputForm.value.length;
  document.getElementById("label3").innerHTML = sizeText;
  document.getElementById('label3').style = 'display:inline';
  inputForm.value = "";
  inputForm.placeholder = 'Escriba aqui';
};
var txt = "abcde ab";
console.log(txt);
console.log(txt.charAt(0));
console.log(txt[0]);
var strMatriz = txt.split(" ");
console.log(strMatriz);