function comprobacion() {
    let mensajeValido = "";
    let valido = true;

    let codigo = document.formulario.codigo.value.trim();
	let descripcion = document.formulario.descripcion.value.trim();
	let fecha = document.formulario.fecha.value.trim();
	let precio = document.formulario.precio.value.trim();
	let empresa = document.formulario.empresa.value.trim();
	let codempre = document.formulario.codempre.value.trim();
	let direccion = document.formulario.direccion.value.trim();
	let localidad = document.formulario.localidad.value.trim();
    let minuni = document.formulario.minuni.value.trim();
    let unidades = document.formulario.unidades.value.trim();
	let familia = document.formulario.familia.value.trim();
	let transporte = document.formulario.transporte.value.trim();
	let iva = document.formulario.iva.value.trim();
	let paises = document.formulario.paises;

    mensajeValido += comCodigo(codigo);
    mensajeValido += comDesc(descripcion);
    mensajeValido += comFecha(fecha);
    mensajeValido += comPrecio(precio);

    mensajeValido += comEmpresa(empresa);
    mensajeValido += comCodEmpresa(codempre);
    mensajeValido += comDireccion(direccion);
    mensajeValido += comLocalidad(localidad);

    mensajeValido += comUnidadesMinimas(minuni);
    mensajeValido += comUnidades(unidades);
    mensajeValido += comFamilia(familia);
    mensajeValido += comTransporte(transporte);

    mensajeValido += comIva(iva);
    mensajeValido += comSecProduccion();
    mensajeValido += comPaises(paises);

    if (mensajeValido.length > 0) {
        window.alert(mensajeValido);
        valido = false;
    }
    console.log(valido);
    return valido;
}

// ------------------------------------------ REGEXP
function comCodigo(codigo)
{
    let exp = new RegExp("(^[\\d]{7}$|^[\\d]{11}$)");
    let mensaje = "";
    if (!exp.test(codigo)) 
        mensaje = "El dato del código no es correcto.\n"; 
    return mensaje;
}
function comDesc(descripcion)
{
    let exp = new RegExp("^[a-záéíóúüñ]{4}[a-záéíóúüñ\\s\\-\\d]{5,18}[a-záéíóúüñ]{1}$","i");
    let mensaje = "";
    if (!exp.test(descripcion)) 
        mensaje = "El dato de la direccion no es correcto.\n"; 
    return mensaje;
}
function comFecha(fecha)
{
    let exp = new RegExp("\\d{2}(\\-|\\/)\\d{2}(\\-|\\/)\\d{4}");
    let mensaje = "";
    if (!exp.test(fecha)) 
        mensaje = "El dato de la fecha no es correcto.\n"; 
    return mensaje;
}
function comPrecio(precio)
{
    let exp = new RegExp("^[1-9]{1}\\d{1,}(\\.[\\d]{1,2})?$");
    let mensaje = "";
    if (!exp.test(precio)) 
        mensaje = "El dato del precio no es correcto.\n"; 
    return mensaje;
}
// ------------------------------------------ DIRECTAS
function comEmpresa(empresa)
{
    //let exp =/[a-záéíóúüñ]{3}(\.?[a-záéíóúüñ\ \d]){6,23}[a-záéíóúüñ\d]{1}$/i;
    let exp =/[a-záéíóúüñ]{3}([a-záéíóúüñ\.\ \d]){6,23}[a-záéíóúüñ\d]{1}$/i;
    let mensaje = "";
    if (!exp.test(empresa)) 
        mensaje = "El dato del nombre de la empresa no es correcto.\n"; 
    return mensaje;
}
function comCodEmpresa(codempre)
{
    let exp =/^[a-záéíóúüñ]{3}\.{1}(ABCE|CADE|FEGU|IJOK|LIMA)[\d]{5,8}\.{1}[a-záéíóúüñ\d]{5}$/i;
    let mensaje = "";
    if (!exp.test(codempre)) 
        mensaje = "El dato del codigo de la empresa no es correcto.\n"; 
    return mensaje;
}

function comDireccion(direccion)
{
    let exp =/^[a-záéíóúüñ]{2}([a-záéíóúüñ\.\,\-\º\ª\\\d]){7,25}[a-záéíóúüñ\d\.]{1}$/i;
    let mensaje = "";
    if (!exp.test(direccion)) 
        mensaje = "El dato de la direccion de la empresa no es correcto.\n"; 
    return mensaje;
}
function comLocalidad(localidad)
{
    let exp =/^[a-záéíóúüñ]{5,20}$/i;
    let mensaje = "";
    if (!exp.test(localidad)) 
        mensaje = "El dato de la localidad de la empresa no es correcto.\n"; 
    return mensaje;
}

// ------------------------------------------ EXHAUSTIVAS

function comUnidadesMinimas(unimin)
{
    let mensaje = "";
    if (unimin.length < 2 || unimin.length > 4)  {
        mensaje = "El dato de las unidades minimas no es correcto.\n";
    }else
        if (unimin < 30 ) 
            mensaje = "El dato de las unidades minimas no es correcto.\n";
    return mensaje;
}
function comUnidades(unidades)
{
    let mensaje = "";
    if (unidades.length < 2 || unidades.length > 7)  {
        mensaje = "El dato de las unidades no es correcto.\n";
    }
    return mensaje;
}
function comFamilia(familia)
{
    let mensaje = "";
    let valido = true;
    if (familia.length < 10 || familia.length > 21)  {
        valido = false;
    }else
    {
        // let i = 0;

        // while (valido || i < 5) 
        // {
        //     valido = comprobarLetraOtros(familia.at(i),"áéíóúüñ");
        //     i+=1;            
        // }
        // while (valido || i < familia.length-3) 
        // {
        //     valido = comprobarTodo(familia.at(i)," -.|");
        //     i+=1;            
        // }
        // while (valido || i < familia.length-3) 
        // {
        //     valido = comprobarLetraOtros(familia.at(i),"áéíóúüñ");
        //     i+=1;            
        // }

    }
    if (!valido) {
        mensaje = "El dato de la familia no es correcto.\n";
    }
    return mensaje;
}
function comTransporte(transporte)
{
    let mensaje = "";
    if (!(transporte.toLowerCase() == "seur" || transporte.toLowerCase() == "nacex" || transporte.toLowerCase() == "dhl" || transporte.toLowerCase() == "mrw"))
        mensaje = "El dato del transporte no es correcto.\n";
    
    
    return mensaje;
}


// ------------------------------------------ EXHAUSTIVAS CARACTERES

function comprobarLetraOtros(letra,otros) 
{
    let valido = true;

    if (letra < "a" || letra > "z") 
        if (!otros.includes(letra))
            valido=false; 
    return valido;     
}   
function comprobarTodo(letra,otros) 
{
    let valido = true;
    if (letra < "a" || letra > "z")
        if ( letra < "0" || letra > "9" ) 
            if (! otros.includes(letra))
                valido=false; 
    return valido;     
}

// ------------------------------------------ SELECTORES

function comIva(iva)
{
    let mensaje = "";
    if (iva.length == 0) {
        mensaje = "Seleccione un tipo de IVA. \n";
    }

    return mensaje;
}

function comSecProduccion()
{
    let cont = 0;
    let mensaje = "";
    if (document.formulario.informatica.checked)
        cont+=1;
    if (document.formulario.hosteleria.checked)
        cont+=1;
    if (document.formulario.quimica.checked)
        cont+=1;
    if (document.formulario.sanidad.checked)
        cont+=1;
    if (document.formulario.electronica.checked)
        cont+=1;
    if (document.formulario.textil.checked)
        cont+=1;
    if (cont < 1 )
        mensaje = "Seleccione minimo un sector . \n";
    return mensaje;
}


function comPaises(paises)
{
    let mensaje = "";
    let cont = 0;
    for (let i = 0; i < paises.length; i++)
        if (paises[i].selected) 
            cont += 1;
    if (cont < 3) 
        mensaje = "Seleccione minimo 3 paises. \n";

    return mensaje;
}













