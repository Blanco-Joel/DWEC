if (document.addEventListener)
    window.addEventListener("load",inicio)
else if (document.attachEvent)
    window.attachEvent("onload",inicio);
    

function inicio(){
    
    let botonDef=document.getElementById("annadir_def");
    let botonLoc=document.getElementById("annadir_localidad");
    let botonCoc=document.getElementById("annadir_coche");
    let focusCom=document.getElementById("comunidad");
    
    if (document.addEventListener){
        botonDef.addEventListener("click", annadirDef);
        botonLoc.addEventListener("click", annadirLoc);
        botonCoc.addEventListener("click", annadirCoc);
        focusCom.addEventListener("change", comunidades);

    }else if (document.attachEvent){
        botonDef.attachEvent("onclick", annadirDef);
        botonLoc.attachEvent("onclick", annadirLoc);
        botonCoc.attachEvent("onclick", annadirCoc);
        focusCom.attachEvent("onchange", comunidades);
    }
}
function annadirDef()
{
    let palabra  = document.getElementById("palabra").value.trim();
    let concepto = document.getElementById("concepto").value.trim();
	if (palabra.length > 0 && concepto.length > 0 ) {
		let lista=document.getElementById("def");
		let todos=lista.getElementsByTagName("dt");
		let inexistente=true;
		let indice=0;
		while (inexistente && indice < todos.length)
        {
            if (todos.item(indice).textContent.substring(0,palabra.length) == palabra )
            {
                let nuevoCon=document.createElement("dd");
                let contenidoCon=document.createTextNode(concepto);
                nuevoCon.appendChild(contenidoCon);
                todos.item(indice).append(nuevoCon);
                inexistente=false;
            }
			indice+=1;
		}
		if (inexistente){
			let nuevaPal=document.createElement("dt");
			let contenidoPal=document.createTextNode(palabra);
            let nuevoCon=document.createElement("dd");
			let contenidoCon=document.createTextNode(concepto);
			nuevaPal.appendChild(contenidoPal);
			lista.append(nuevaPal);			
			nuevoCon.appendChild(contenidoCon);
			lista.append(nuevoCon);
		}
	}
}

function annadirLoc(){
	let localidad=document.getElementById("localidad").value.trim();
	if (localidad.length > 0) {
		let lista=document.getElementById("localidades");
		let todos=lista.getElementsByTagName("li");
		let inexistente=true;
		let indice=0;
		while (inexistente && indice < todos.length){
			if (todos.item(indice).textContent == localidad)
				inexistente=false
			else if (localidad.toUpperCase() < todos.item(indice).textContent.toUpperCase()){
				inexistente=false;
				let nuevo=document.createElement("li");
				let contenido=document.createTextNode(localidad);
				nuevo.appendChild(contenido);
				lista.insertBefore(nuevo, todos.item(indice));
				//todos.item(indice).before(nuevo);
			}
			indice+=1;
		}
		if (inexistente){
			let nuevo=document.createElement("li");
			let contenido=document.createTextNode(localidad);
			nuevo.appendChild(contenido);
			lista.append(nuevo);
		}
	}
}

function annadirCoc(){
	let marca=document.getElementById("marca").value.trim();
	let modelo=document.getElementById("modelo").value.trim();
	let precio=document.getElementById("precio").value.trim();
	if (marca.length > 0 && modelo.length > 0 && precio.length > 0 ) {
		let tabla=document.getElementById("coches");
		let padre=tabla.querySelector("tbody");
		let todos=padre.getElementsByTagName("tr");
		let indice=0;
		let inexis=true;
		while (inexis && indice < todos.length){
			let celdas=todos.item(indice).getElementsByTagName("td");
			if (celdas[0].textContent == marca && celdas[1].textContent == modelo)
				inexis=false;
			indice+=1;
		}
		if (inexis) {
			let fila=document.createElement("tr");
			let col1=document.createElement("td");
			let col2=document.createElement("td");
			let col3=document.createElement("td");
			let con1=document.createTextNode(marca);
			let con2=document.createTextNode(modelo);
			let con3=document.createTextNode(precio);
			col1.append(con1);
			col2.append(con2);
			col3.append(con3);
			fila.appendChild(col1);
			fila.appendChild(col2);
			fila.appendChild(col3);
			padre.append(fila);
		}
	}
}
function comunidades() {
    let comunidadesYProvincias = [
        ["Andalucia", ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"]],
        ["Aragon", ["Huesca", "Teruel", "Zaragoza"]],
        ["Asturias", ["Asturias"]],
        ["Baleares", ["Islas Baleares"]],
        ["Canarias", ["Las Palmas", "Santa Cruz de Tenerife"]],
        ["Cantabria", ["Cantabria"]],
        ["Castilla_la_mancha", ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"]],
        ["Castilla_y_leon", ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"]],
        ["Catalunya", ["Barcelona", "Girona", "Lleida", "Tarragona"]],
        ["Comunidad_valenciana", ["Alicante", "Castellón", "Valencia"]],
        ["Extremadura", ["Badajoz", "Cáceres"]],
        ["Galicia", ["A Coruña", "Lugo", "Ourense", "Pontevedra"]],
        ["Madrid", ["Madrid"]],
        ["Murcia", ["Murcia"]],
        ["Navarra", ["Navarra"]],
        ["La Rioja", ["La Rioja"]],
        ["Pais_vasco", ["Álava", "Guipúzcoa", "Vizcaya"]],
        ["Ceuta", ["Ceuta"]],
        ["Melilla", ["Melilla"]]
    ]
    let = comunidadesDesc = [
        ["Andalucia", ["Con un rico legado árabe, Andalucía es famosa por la Alhambra, la Mezquita de Córdoba, sus playas y su vibrante flamenco."]],
        ["Aragon", ["Aragón destaca por sus paisajes pirenaicos, la arquitectura mudéjar en Teruel y la Basílica del Pilar en Zaragoza."]],
        ["Asturias", ["Conocida como el 'Paraíso Natural', Asturias ofrece verdes montañas, playas espectaculares y una gastronomía basada en sidra y fabada."]],
        ["Baleares", ["Famosas por sus playas paradisíacas y vida nocturna, las Baleares, especialmente Mallorca e Ibiza, son un destino turístico internacional."]],
        ["Canarias", ["Con clima subtropical, paisajes volcánicos y playas, Canarias es conocida por el Teide y el Carnaval de Santa Cruz."]],
        ["Cantabria", ["Cantabria ofrece montañas, playas y cuevas prehistóricas, como Altamira, en un entorno de gran belleza natural."]],
        ["Castilla_y_leon", ["Extensa región con ciudades históricas, arte románico y catedrales; Castilla y León incluye Salamanca, Burgos y Valladolid."]],
        ["Castilla_la_mancha", ["Famosa por sus molinos de viento, esta región inspira el Quijote y ofrece monumentos históricos en Toledo y Cuenca."]],
        ["Catalunya", ["Cataluña es culturalmente vibrante, con la arquitectura de Gaudí en Barcelona, playas en la Costa Brava y los Pirineos."]],
        ["Comunidad_valenciana", ["Reconocida por sus playas mediterráneas, la Ciudad de las Artes y las Fallas, es una región dinámica y soleada."]],
        ["Extremadura", ["Con ciudades históricas como Mérida y Cáceres, Extremadura ofrece una rica herencia romana y paisajes naturales vírgenes."]],
        ["Galicia", ["Galicia es famosa por el Camino de Santiago, sus rías, gastronomía de mariscos y su verde entorno montañoso."]],
        ["Madrid", ["Madrid, la capital, combina historia, cultura y modernidad, con museos, el Palacio Real y el parque del Retiro."]],
        ["Murcia", ["Murcia es soleada y agrícola, conocida por sus huertas, la catedral de su capital y playas mediterráneas."]],
        ["Navarra", ["Navarra, conocida por los Sanfermines en Pamplona, ofrece paisajes naturales y un importante patrimonio medieval."]],
        ["La Rioja", ["Famosa por sus vinos, La Rioja es una pequeña región con paisajes de viñedos y bodegas de renombre mundial."]],
        ["Pais_vasco", ["El País Vasco destaca por su gastronomía, el Museo Guggenheim en Bilbao y los paisajes verdes de montaña y mar."]],
        ["Ceuta", ["Ceuta, en el norte de África, es una ciudad multicultural con historia cristiana, árabe y romana."]],
        ["Melilla", ["Melilla, en la costa africana, destaca por su arquitectura modernista y su vibrante mezcla cultural."]]
    ]
    let todasProvincias = document.getElementById("provincias");
    let eleccion = document.getElementById("comunidad").value;
    let encontrado = true; 
    let indice = 0;

    while (encontrado && indice < comunidadesYProvincias.length) {
        if (comunidadesYProvincias[indice][0] == eleccion) 
            encontrado = false;
        indice += 1;
    }
    for (let i = todasProvincias.length-1; i >= 0 ; i--) {
        todasProvincias.item(i).remove();
        }
    indice -= 1;
    comunidadesYProvincias[indice][1].forEach(provincia => {
        let option=document.createElement("option");
        option.append(provincia);
        todasProvincias.appendChild(option);
    });
    let cajaCont = document.getElementById("comentario");
    cajaCont.textContent = comunidadesDesc[indice][1][0];
}