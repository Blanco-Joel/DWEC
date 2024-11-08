if (document.addEventListener)
    window.addEventListener("load",inicio)
else if (document.attachEvent)
    window.attachEvent("onload",inicio);
    

function inicio(){
    
    let botonDef=document.getElementById("annadir_def");
    let botonLoc=document.getElementById("annadir_localidad");
    let botonCoc=document.getElementById("annadir_coche");
    if (document.addEventListener){
        botonDef.addEventListener("click", annadirDef);
        botonLoc.addEventListener("click", annadirLoc);
        botonCoc.addEventListener("click", annadirCoc);

    }else if (document.attachEvent){
        botonDef.attachEvent("onclick", annadirDef);
        botonLoc.attachEvent("onclick", annadirLoc);
        botonCoc.attachEvent("onclick", annadirCoc);
    }
}
function annadirDef()
{
    let palabra=document.getElementById("palabra").value.trim();
    let concepto=document.getElementById("concepto").value.trim();
	if (palabra.length > 0 && concepto.length > 0 ) {
		let lista=document.getElementById("def");
		let todos=lista.getElementsByTagName("dt");
		let inexistente=true;
		let indice=0;
		while (inexistente && indice < todos.length)
        {
            console.log(todos.item(indice).textContent);
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
			if (celdas[0].textContent == marca)
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
/*
comunidadesYProvincias = [
    ["Andalucía", [
        ["Almería", "Conocida por sus playas, desiertos y paisajes únicos, Almería es famosa por su buen clima y su herencia árabe en monumentos como la Alcazaba."],
        ["Cádiz", "Destino costero con playas y la icónica Torre Tavira; Cádiz es una de las ciudades más antiguas de Europa."],
        ["Córdoba", "Su Mezquita-Catedral es Patrimonio de la Humanidad; Córdoba mezcla culturas árabe, judía y cristiana."],
        ["Granada", "Hogar de la Alhambra y Sierra Nevada, es un destino histórico y natural imperdible."],
        ["Huelva", "Famosa por sus playas, naturaleza y el legado de Cristóbal Colón en lugares como La Rábida."],
        ["Jaén", "Reconocida por sus extensos olivares y el Castillo de Santa Catalina; es capital mundial del aceite de oliva."],
        ["Málaga", "Importante centro turístico y cultural; destaca por sus playas y el Museo Picasso."],
        ["Sevilla", "Con la Giralda y la Feria de Abril, Sevilla es el corazón cultural de Andalucía."]
    ]],
    ["Aragón", [
        ["Huesca", "Con los Pirineos y el Parque de Ordesa, Huesca es un paraíso para montañistas y amantes de la naturaleza."],
        ["Teruel", "Destaca por su arquitectura mudéjar y la historia medieval de los Amantes de Teruel."],
        ["Zaragoza", "Famosa por la Basílica del Pilar y su rica historia romana y árabe."]
    ]],
    ["Asturias", [
        ["Asturias", "Paraíso natural de montañas, playas y ciudades históricas como Oviedo y Gijón."]
    ]],
    ["Islas Baleares", [
        ["Islas Baleares", "Famosas por sus playas y vida nocturna, especialmente en Ibiza y Mallorca."]
    ]],
    ["Canarias", [
        ["Las Palmas", "Con playas y el ambiente cosmopolita de la capital, Las Palmas es muy atractiva."],
        ["Santa Cruz de Tenerife", "Hogar del famoso Carnaval y del volcán Teide, es un importante destino turístico."]
    ]],
    ["Cantabria", [
        ["Cantabria", "Con cuevas prehistóricas como Altamira y playas, Cantabria es rica en historia y paisajes verdes."]
    ]],
    ["Castilla y León", [
        ["Ávila", "Conocida por sus murallas medievales, Ávila es Patrimonio de la Humanidad."],
        ["Burgos", "Famosa por su catedral gótica, Burgos tiene un rico legado histórico."],
        ["León", "Su Catedral gótica y la historia romana y medieval destacan en León."],
        ["Palencia", "Reconocida por su arte románico y su tranquila vida en el campo."],
        ["Salamanca", "Con su universidad histórica y arquitectura renacentista, es ciudad Patrimonio de la Humanidad."],
        ["Segovia", "Famosa por su Acueducto romano y su Alcázar, es patrimonio de gran riqueza."],
        ["Soria", "Enclave natural con arquitectura románica y lugares icónicos como la Laguna Negra."],
        ["Valladolid", "Antigua capital, destaca por su historia y vinos de la región."],
        ["Zamora", "Con un rico patrimonio románico y medieval, Zamora es un tesoro cultural."]
    ]],
    ["Castilla-La Mancha", [
        ["Albacete", "Conocida por su feria y su tradicional cuchillería, es el centro de La Mancha."],
        ["Ciudad Real", "Hogar de molinos de viento de la Mancha y rica en historia medieval."],
        ["Cuenca", "Famosa por sus Casas Colgadas, Cuenca es Patrimonio de la Humanidad."],
        ["Guadalajara", "Provincia con castillos medievales y paisajes naturales impresionantes."],
        ["Toledo", "Ciudad Patrimonio de la Humanidad, conocida como la ciudad de las tres culturas."]
    ]],
    ["Cataluña", [
        ["Barcelona", "Destacada por la arquitectura de Gaudí, como la Sagrada Familia y el Parque Güell."],
        ["Girona", "Ciudad medieval con un casco antiguo bien conservado y murallas romanas."],
        ["Lleida", "Con historia romana y la Catedral Vieja en lo alto, Lleida es cultural y paisajística."],
        ["Tarragona", "Con ruinas romanas Patrimonio de la Humanidad y playas mediterráneas."]
    ]],
    ["Comunidad Valenciana", [
        ["Alicante", "Famosa por sus playas y el castillo de Santa Bárbara."],
        ["Castellón", "Destino de naturaleza y playas, Castellón es rica en tradiciones mediterráneas."],
        ["Valencia", "Con su Ciudad de las Artes, playas y Fallas, Valencia es vibrante y cultural."]
    ]],
    ["Extremadura", [
        ["Badajoz", "Enclave fronterizo con Portugal, destaca por su Alcazaba árabe."],
        ["Cáceres", "Ciudad medieval bien conservada, Patrimonio de la Humanidad."]
    ]],
    ["Galicia", [
        ["A Coruña", "Con la Torre de Hércules y playas, A Coruña es un destino histórico."],
        ["Lugo", "Famosa por sus murallas romanas, Lugo es Patrimonio de la Humanidad."],
        ["Ourense", "Conocida por sus aguas termales y su catedral románica."],
        ["Pontevedra", "Con un casco antiguo encantador y playas cercanas, Pontevedra es pintoresca."]
    ]],
    ["Madrid", [
        ["Madrid", "La capital, rica en cultura y arte, con lugares icónicos como el Prado y el Retiro."]
    ]],
    ["Murcia", [
        ["Murcia", "Famosa por su catedral y su gastronomía, Murcia combina tradición y modernidad."]
    ]],
    ["Navarra", [
        ["Navarra", "Con su capital Pamplona y los Sanfermines, Navarra es historia y naturaleza."]
    ]],
    ["La Rioja", [
        ["La Rioja", "Famosa por sus vinos y paisajes vitivinícolas, La Rioja es tierra de tradición."]
    ]],
    ["País Vasco", [
        ["Álava", "Vitoria, su capital, es conocida por su casco medieval y entorno natural."],
        ["Guipúzcoa", "San Sebastián destaca por su bahía y su excelente gastronomía."],
        ["Vizcaya", "Con Bilbao y el Museo Guggenheim, Vizcaya es moderna y cultural."]
    ]],
    ["Ceuta", [
        ["Ceuta", "Ciudad autónoma en África, con rica herencia árabe, cristiana y romana."]
    ]],
    ["Melilla", [
        ["Melilla", "Ciudad multicultural en el norte de África, con arquitectura modernista."]
    ]]
]
];*/
