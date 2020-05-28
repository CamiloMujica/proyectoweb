var misClientes= [];
var clientes = document.getElementById('clientes');

class Cliente {
    constructor(nombre, apPat, apMat, direccion, comunas) {
        this.nombre = nombre;
        this.apPat = apPat;
        this.apMat = apMat;
        this.direccion = direccion;
        this.comunas = comunas;
    }
}

function crearCliente() {
    var nombre = document.getElementById('nombre').value;
    var apPat = document.getElementById('apPat').value;
    var apMat = document.getElementById('apMat').value;
    var direccion = document.getElementById('direccion').value;
    var valcomunas = document.getElementById('comunas');
    var comunas = valcomunas[valcomunas.selectedIndex].text;

    if (nombre === "" || apPat === "" || apMat === "" || direccion === "" || comunas === "") {
      alert("Todos los campos son obligatorios")
    } else {

    var cliente = new Cliente(nombre, apPat, apMat, direccion, comunas);
    misClientes.push(cliente);
    clientes.innerHTML = '';
    for (var i = 0; i < misClientes.length; i++) {
        clientes.innerHTML = clientes.innerHTML +
            '<tr>' +
                '<td>' + misClientes[i].nombre + '</td>' +
                '<td>' + misClientes[i].apPat + '</td>' +
                '<td>' + misClientes[i].apMat + '</td>' +
                '<td>' + misClientes[i].direccion + '</td>' +
                '<td>' + misClientes[i].comunas + '</td>' +
            '</tr>';
    }
  }
}
