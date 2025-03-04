if (document.addEventListener)
	window.addEventListener("load", iniciar);
else if (document.attachEvent)
	window.attachEvent("onload", iniciar);

function iniciar(){
	let localidad = document.getElementById("localidad"); 
	if (document.addEventListener)
    {
		localidad.addEventListener("change", monumentos);
    }else if (document.attachEvent)
    {
		localidad.attachEvent("change", monumentos);
    }
}
function monumentos() {

	let comus = ["Burgos", [["Arco de Santa María", "Monasterio de San Juan", "Puente de Santa María", "Arco de San Esteban", "Solar del Cid", "Arco de Fernán González", "Antiguo Seminario Mayor", "Monasterio de Santa María la Real de las Huelgas", "Catedral", "El Cid Campeador"]],
	"Córdoba", [["Mezquita-Catedral", "Alcázares de los Reyes Cristianos", "Medina Azahara", "Puente Romano",  "Caballerizas Reales", "Torre de la Calahorra", "Templo Romano", "Torre de la Malmuerta", "Alminar de San Juan", "Mausoleos Romanos", "Capilla de San Bartolomé"]],
	"A Coruña" ,[["Torre de Hércules", "Obelisco Millenium", "iglesia de las Capuchinas", "Castillo de San Antón", "Convento de Santa Bárbara", "Convento de Santo Domingo", "Iglesia de San Jorge", "iglesia de San Nicolás", "Colegiata de Santa María", "Iglesia de Santiago"]],
	"León" ,[["Catedral", "Basílica de San Isidoro", "Casa de Botines", "Convento de las Concepciones", "Cripta de Puerta Obispo", "Iglesia de los Padres Capuchinos", "Iglesia de Nuestra Señora del Camino", "Iglesia de San Marcelo", "Iglesia de Santa Ana"]],
	"Mérida" ,[["Teatro Romano", "Templo de Diana", "Acueducto de los Milagros", "Puente romano sobre el Guadiana", "Anfiteatro Romano", "Arco de Trajano", "Alcazaba árabe", "Basílica de Santa Eulalia",  "Foro romano", "Circo Romano", "Catedral de Santa María", "Puente romano sobre el Albarregas", "Templo de Marte"]],
	"Salamanca" ,[["Catedral Nueva", "Catedral Vieja", "Fachada de la Universidad", "Casa de las Conchas", "La Clerencia", "convento de San Esteban", "Plaza Mayor", "Casa Lis"]],
	"Segovia" ,[["Alcázar", "Acueducto", "Catedral", "Real Casa de Moneda", "Casa de los Picos", "Iglesia de San Martín", "Iglesia de la Santísima Trinidad", "Iglesia de San Esteban", "Iglesia de San Millán", "Iglesia de la Vera Cruz", "Iglesia del Corpus Cristi", "Monasterio del Parral"]	],
	"Sevilla" ,[["Giralda", "Torre del Oro", "Archivo de Indias", "Casa Pilatos", "Catedral", "Palacio de San Telmo", "Hospital de la Caridad", "Parque de María Luisa", "Reales Alcázares", "Real Maestranza de Caballería", "Plaza España", "Baílica de la Macarena", "Jardines de Murillo"]	],
	"Zamora" ,[["Catedral", "Puente de Piedra", "Puerta del Obispo", "Puerta de Doña Urraca", "Muralla", "Monasterio de la Carballeda", "Puerta de la Traición", "Molinos de Agua", "Castillo", "Palacio de los Monos"]]];


	let monumentos = document.getElementById("monumetos");
	let listado = monumentos.getElementsByTagName("li");
	let eleccion = document.getElementById("localidad").value;  
	let encontrado = true; 
	let falta = true
    let indice = 0;
	while (encontrado && indice < comus.length) {
		if (comus[indice] == eleccion) 
			encontrado = false;
		indice += 1;
	}
	while (falta && indice < listado.length){
		if (listado.item(indice).textContent == eleccion)
			falta=false
		else if (eleccion.toUpperCase() < listado.item(indice).textContent.toUpperCase()){
			listado.forEach(elemento => {
				elemento += " "+eleccion; 
				falta=false;
				let nuevo=document.createElement("li");
				let contenido=document.createTextNode(elemento);
				
				nuevo.appendChild(contenido);
				monumentos.insertBefore(nuevo, listado.item(indice));
			});
			//todos.item(indice).before(nuevo);
		}
		indice+=1;
	}
	if (falta){
		let nuevo=document.createElement("li");
		let contenido=document.createTextNode(eleccion);
		nuevo.appendChild(contenido);
		monumentos.append(nuevo);
	}


}

