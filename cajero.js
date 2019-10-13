/*digitar cantidad a retirar y mostrar cantidad de billetes entregados - debo generar el saldo en el cajero*/
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

/* Entrega de dinero */
function entregarDinero(){
  var dinero = 0 ;
  var total = 0;
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for(bi of caja){
      if(dinero > 0){
        div = Math.floor( dinero / bi.valor);
          if(div > bi.cantidad){
            papeles = bi.cantidad;
          }
          else{
              papeles = div;
          }
        entregado.push(new Billete(bi.valor, papeles, bi.imagen));
        dinero = dinero - (bi.valor * papeles);
      }
  }
  if(dinero > 0){
    resultado.innerHTML = "este cajero no tiene la cantidad solicitada"
  }
  else{
      for(var e of entregado){
          if(e.cantidad > 0){
              for(var i = 0 ; i < e.cantidad ; i ++){
                resultado.innerHTML += "<img src = " + e.imagen + ">";
                total += e.valor;
              }
          }
      resultado.innerHTML += "<br />";
      }
  resultado.innerHTML += "Total retirado : $ " + total;
  }
  var saldo = 0;
  for(e of caja){
      for( var i = 0 ; i < e.cantidad ; i ++){
        saldo += e.valor;
      }
  }
  resultado.innerHTML += "<br /> Nuevo saldo: $ " +(saldo - total);
}
