window.onload = inicio;


function inicio()
{
	let minuni = document.formulario.minuni;
	minuni.onkeypress = eventoDigitos;
	minuni.onfocus =  coloresBorrar;
	minuni.onblur = noColores;
	let unidades = document.formulario.unidades;
	unidades.onkeypress = eventoDigitos;
	unidades.onfocus = coloresBorrar;
	unidades.onblur =noColores;
	let precio = document.formulario.precio;
	precio.onkeypress = eventoDigitosPunto;
	precio.onfocus = coloresBorrar;
	precio.onblur =noColores;
	let codigo = document.formulario.codigo
	codigo.onfocus = coloresBorrar;
	codigo.onblur = noColores;
	let descripcion = document.formulario.descripcion
	descripcion.onfocus = coloresBorrar;
	descripcion.onblur = noColores;
	let fecha = document.formulario.fecha
	fecha.onfocus = coloresBorrar;
	fecha.onblur = noColores;
	let empresa = document.formulario.empresa
	empresa.onfocus = coloresBorrar;
	empresa.onblur = noColores;
	let codempre = document.formulario.codempre
	codempre.onfocus = coloresBorrar;
	codempre.onblur = noColores;
	let direccion = document.formulario.direccion
	direccion.onfocus = coloresBorrar;
	direccion.onblur = noColores;
	let localidad = document.formulario.localidad
	localidad.onfocus = coloresBorrar;
	localidad.onblur = noColores;
	let familia = document.formulario.familia
	familia.onfocus = coloresBorrar;
	familia.onblur = noColores;
	let transporte = document.formulario.transporte
	transporte.onfocus = coloresBorrar;
	transporte.onblur = noColores;
	document.formulario.onsubmit = comprobacion;
	

}

function eventoDigitos(event)
{
	let evento = event || window.event;
	let caracter = String.fromCharCode(evento.keyCode);
	let valido = true;
	if (!/^\d/.test(caracter))
		valido = false;
	return valido;
}
function eventoDigitosPunto(event)
{
	let evento = event || window.event;
	let caracter = String.fromCharCode(evento.keyCode);
	let valido = true;
	let campo  = evento.target.value;
	if (!/\d|\./.test(caracter)) 
		valido = false;
	// if (!/\d{1,}\.{1}/.test(campo) && !/(\.)/.test(caracter))
	// 	valido = false;

	return valido;
}

function coloresBorrar(event)
{
    let evento = event || window.event;
    let campo  = evento.target;
	campo.value = "";
    campo.style.color = "yellow";
    campo.style.backgroundColor = "red";
}

function noColores(event)
{
    let evento = event || window.event;
    let campo  = evento.target;
    campo.style.color = "black";
    campo.style.backgroundColor = "white";
    
}

