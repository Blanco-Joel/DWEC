$(window).on("load", inicio);

function inicio(){
	$("#aplicar").on("click",pintar);
	$(".salamanca").on("mouseenter",saltarina);
    $(".salamanca").on("mouseleave",noSaltarina);
    $("#cambiar").on("click",cambio);
}
function pintar()
{
	let tabla = $("#coches");
	let padre = tabla.find("tbody");
	let todos = padre.find("tr>td");
	let columnas1 = todos.even();
	let columnas2 = todos.odd();
    for (let i = 0; i < columnas1.length; i++) {
        columnas1.eq(i).attr("style","background-color: orange;color:green");
    }
    for (let i = 0; i < columnas2.length; i++) {
        columnas2.eq(i).attr("style","background-color: yellow;color:red");
    }
}
function saltarina()
{
    $(".salamanca").addClass("saltarina");
}
function noSaltarina()
{
    $(".salamanca").removeClass("saltarina");
}
function cambio()
{
    let seleccion = $("#comunidades").eq(0).val();
    let boton = $("#cambiar");
    if (boton.next("ol").length == 0) {
        boton.after("<ol id='listaFinal'></ol>");    
    } 
    let listado = $("#listaFinal"); 

    let tabla = $("#ciudades>tbody>tr>td");
    for (let i = 0; i < tabla.length; i++) {
        for (let y = 0; y < seleccion.length; y++) {
            if (tabla.eq(i).text() == seleccion[y]) {
                listado.append("<li>"+tabla.eq(i).text()+"</li>");
                tabla.eq(i).remove();
            }        
        }
    }    

    
}




