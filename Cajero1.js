class Billete{
  constructor(v,c, bill){
    this.valor = v;
    this.cantidad = c;
    this.imagen = bill;
  }
}
var caja = [];
var entregado = [];

caja.push(new Billete( 100, 5, "billete100.png"));//500
caja.push(new Billete( 50, 5, "billete50.png"));//250
caja.push(new Billete( 20, 5, "billete20.png"));//100
caja.push(new Billete( 10, 5, "billete10.png"));//50
caja.push(new Billete( 5, 5, "billete5.png"));//25
caja.push(new Billete( 1, 5, "billete1.png"));//5

var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
