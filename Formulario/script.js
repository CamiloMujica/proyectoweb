var misClientes= [];
var clientes = document.getElementById('clientes');

class Cliente {
    constructor(nombre, apPat, apMat, direccion, comuna) {
        this.nombre = nombre;
        this.apPat = apPat;
        this.apMat = apMat;
        this.direccion = direccion;
        this.comuna = comuna;
    }
}

function crearCliente() {
    var nombre = document.getElementById('nombre').value;
    var apPat = document.getElementById('apPat').value;
    var apMat = document.getElementById('apMat').value;
    var direccion = document.getElementById('direccion').value;
    var valcomuna = document.getElementById('comuna');
    var comuna = valcomuna[valcomuna.selectedIndex].text;

    var cliente = new Cliente(nombre, apPat, apMat, direccion, comuna);
    misClientes.push(cliente);
    clientes.innerHTML = '';
    for (var i = 0; i < misClientes.length; i++) {
        clientes.innerHTML = clientes.innerHTML +
            '<tr>' +
                '<td>' + misClientes[i].nombre + '</td>' +
                '<td>' + misClientes[i].apPat + '</td>' +
                '<td>' + misClientes[i].apMat + '</td>' +
                '<td>' + misClientes[i].direccion + '</td>' +
                '<td>' + misClientes[i].comuna + '</td>' +
            '</tr>';
    }
}
