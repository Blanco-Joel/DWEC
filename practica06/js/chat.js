if (document.addEventListener)
    window.addEventListener("load",inicio)
else if (document.attachEvent)
    window.attachEvent("onload",inicio);
    

function inicio(){
    
    let botonReg  = document.getElementById("registrar");
    let botonEntr = document.getElementById("entrar");

    
    if (document.addEventListener){
        botonReg.addEventListener("click", mostrarRegistro);
        botonEntr.addEventListener("click", mostrarEntrada);
    }else if (document.attachEvent){
        botonReg.attachEvent("onclick", mostrarRegistro);
        botonEntr.attachEvent("onclick", mostrarEntrada);
    }
}
function mostrarRegistro() {
    mostrarDialog("registro");
}

function mostrarEntrada() {
    mostrarDialog("entrada");
}
function mostrarDialog(mensaje) 
{
    
    let botonAceptar  = document.getElementById("aceptar");
    let botonCancelar = document.getElementById("cancelar");

    let dialog = document.getElementById("registroDialog");
    dialog.setAttribute("open", "true");


    if (document.addEventListener) 
    {
        botonAceptar.removeEventListener("click", guardarCookie);
        botonAceptar.removeEventListener("click", comprobarCookie);
        if (mensaje == "registro")
            botonAceptar.addEventListener("click", guardarCookie);
        else if (mensaje == "entrada")
            botonAceptar.addEventListener("click", comprobarCookie);
        
    }else if (document.attachEvent)
    {
        botonAceptar.dispatchEvent("onclick", guardarCookie);
        botonAceptar.dispatchEvent("onclick", comprobarCookie);
        if (mensaje == "registro")
            botonAceptar.attachEvent("onclick", guardarCookie);
        else if (mensaje == "entrada")
            botonAceptar.attachEvent("onclick", comprobarCookie);
    }

    if (document.addEventListener){
        botonAceptar.addEventListener("click", cerrarDialog);
        botonCancelar.addEventListener("click", cerrarDialog);
    }else if (document.attachEvent){
        botonAceptar.attachEvent("onclick", cerrarDialog);
        botonCancelar.attachEvent("onclick", cerrarDialog);
    }
}

function cerrarDialog() 
{
    let dialog = document.getElementById("registroDialog");
    dialog.removeAttribute("open");
}

function guardarCookie()
{
    let user     = document.getElementById("usuario").value;
    let passw    = document.getElementById("passw").value;
    let regUser  = /^[a-záéíóúüñ]{3}[a-záéíóúüñ\d]{5,9}$/;
    let regPassw = /^[a-záéíóúüñ]{2}[a-záéíóúüñ\d\_]{5,11}[a-záéíóúüñ\d]$/;
    if (!regUser.test(user) && !regPassw.test(passw))
        document.cookie=user+"="+passw+";expires=true, 31 Dec 2024 00:00:00 GMT;";
}

function comprobarCookie()
{
    let user  = document.getElementById("usuario").value;
    let passw = document.getElementById("passw").value;
    
    let galletica=document.cookie.split("; ");
    let indice=0;
    let inexiste = true;
    let correcto = true;
    while (inexiste && indice < galletica.length){
        if (galletica[indice].startsWith(user+"="))
        {
            inexiste=false;
            let valores=galletica[indice].split("=");
            password=valores[1];

            if (password!=passw)
                correcto=false;

        }
        indice+=1;
    }  
    if (inexiste)
        window.alert("El usuario no existe.");
    else if(!correcto)
        window.alert("La contraseña es incorrecta."); 
    else
    {   
        let nombreUser = document.getElementById("nombreUser");
        let botonEntr  = document.getElementById("entrar");
        botonEntr.value = "Cerrar Sesion";
        nombreUser.textContent = user;
        if (document.addEventListener){
            botonEntr.removeEventListener("click", mostrarEntrada);
            botonEntr.addEventListener("click", cerrarSesion);
        }else if (document.attachEvent){
            botonEntr.dispatchEvent("onclick", mostrarEntrada);
            botonEntr.attachEvent("onclick", cerrarSesion);
        }
    }
    habilitarMensaje();
}

function cerrarSesion()
{
    let nombreUser = document.getElementById("nombreUser");
    let botonEntr  = document.getElementById("entrar");
    let parametros = document.getElementById("parametros_mensajes");
    let botonMens  = document.getElementById("annadir_mensaje");
    parametros.style.display="none";
    botonEntr.value = "Entrar";
    nombreUser.textContent = "Usuario";
    if (document.addEventListener){
        botonMens.removeEventListener("click", annadirMensaje);
        botonEntr.removeEventListener("click", cerrarSesion);
        botonEntr.addEventListener("click", mostrarEntrada);
    }else if (document.attachEvent){
        botonMens.dispatchEvent("onclick", annadirMensaje);
        botonEntr.dispatchEvent("onclick", cerrarSesion);
        botonEntr.attachEvent("onclick", mostrarEntrada);
    }
}
function habilitarMensaje()
{
    let botonMens=document.getElementById("annadir_mensaje");
    if (document.addEventListener){
        botonMens.addEventListener("click", annadirMensaje);
    }else if (document.attachEvent){
        botonMens.attachEvent("onclick", annadirMensaje);
    }
}
function annadirMensaje()
{
    let botonAceptar  = document.getElementById("enviar_mensaje");
    let botonCancelar = document.getElementById("no_enviar_mensaje");
    let parametros    = document.getElementById("parametros_mensajes");
    parametros.style.display="grid";
    
    if (document.addEventListener) 
    {
        botonAceptar.addEventListener("click", validacion);
        botonCancelar.addEventListener("click", deshabilitarMensaje);
    }else if (document.attachEvent)
    {
        botonAceptar.attachEvent("onclick", validacion);
        botonCancelar.attachEvent("onclick", deshabilitarMensaje);
    }
    
}
function validacion()
{
    let pikachu = document.querySelector('input[name="pikachus"]:checked').value;
    let titulo  = document.getElementById("titulo_mensaje").value;
    let cuerpo  = document.getElementById("cuerpo_mensaje").value;

    if (pikachu.length > 0 && titulo.length > 0 && cuerpo.length > 0 )
    {
        enviarMensaje();
        deshabilitarMensaje();
    }else
    {    
        window.alert("Comlete todos los campos"); 
        annadirMensaje();
    }
    
}
function deshabilitarMensaje()
{
    let parametros=document.getElementById("parametros_mensajes");
    let pikachus = document.getElementsByName("pikachus");

    for (var i = 0; i < pikachus.length; i++) 
        pikachus[i].checked = false;
    document.getElementById("titulo_mensaje").value = "";
    document.getElementById("cuerpo_mensaje").value = "";
    parametros.style.display="none";

}
function enviarMensaje() 
{
    let user     = document.getElementById("usuario").value;
    let listMen  = document.getElementById("mensajes");
    let pikachu  = document.querySelector('input[name="pikachus"]:checked').value + ".jpg";
    let titulo   = document.getElementById("titulo_mensaje").value;
    let cuerpo   = document.getElementById("cuerpo_mensaje").value;
    let nuevoMen = document.createElement("div");
    let nuevaImg = document.createElement("img");
    let nuevoUse = document.createElement("h1");
    let nuevoTit = document.createElement("h4");
    let nuevoCue = document.createElement("p");
    let etiqUse  = document.createTextNode(user);
    let etiqTit  = document.createTextNode(titulo);
    let etiqCue  = document.createTextNode(cuerpo);
    nuevaImg.setAttribute("src","./img/" + pikachu);
    nuevaImg.setAttribute("height","40px");
    nuevaImg.setAttribute("width","40px");
    nuevoMen.style.border       = "2px white solid";
    nuevoMen.style.width        = "max-content";
    nuevoMen.style.marginBottom = "15px";
    nuevaImg.style.display      = "inline";
    nuevaImg.style.margin       = "15px 5px -10px 15px";
    nuevoUse.style.color        = "yellow";
    nuevoUse.style.display      = "inline";
    nuevoUse.style.marginRight  = "15px";
    nuevoUse.style.fontSize     = "26pt";
    nuevoTit.style.fontWeight   = "bold";
    nuevoTit.style.marginLeft   = "15px";
    nuevoTit.style.marginRight  = "15px";
    nuevoCue.style.fontStyle    = "italic";
    nuevoCue.style.marginLeft   = "15px";
    nuevoCue.style.marginRight  = "15px";
    nuevoUse.append(etiqUse);
    nuevoTit.append(etiqTit);
    nuevoCue.append(etiqCue);
    nuevoMen.appendChild(nuevoUse);
    nuevoMen.appendChild(nuevoTit);
    nuevoMen.appendChild(nuevoCue);
    nuevoMen.insertBefore(nuevaImg,nuevoUse);
    listMen.appendChild(nuevoMen);

}