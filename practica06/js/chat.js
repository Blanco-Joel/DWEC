if (document.addEventListener)
    window.addEventListener("load",inicio)
else if (document.attachEvent)
    window.attachEvent("onload",inicio);
    

function inicio(){
    
    let botonReg=document.getElementById("registrar");
    let botonEntr=document.getElementById("entrar");

    
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
    
    let botonAceptar=document.getElementById("aceptar");
    let botonCancelar=document.getElementById("cancelar");

    let dialog = document.getElementById("registroDialog");
    dialog.setAttribute("open", "true");
    botonAceptar.removeEventListener("click", guardarCookie);
    botonAceptar.removeEventListener("click", comprobarCookie);

    if (document.addEventListener) 
    {
        if (mensaje == "registro")
            botonAceptar.addEventListener("click", guardarCookie);
        else if (mensaje == "entrada")
            botonAceptar.addEventListener("click", comprobarCookie);
        
    }else if (document.attachEvent){
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
    let user = document.getElementById("usuario").value;
    let passw = document.getElementById("passw").value;
    let regUser = /^[a-záéíóúüñ]{3}[a-záéíóúüñ\d]{5,9}$/;
    let regPassw = /^[a-záéíóúüñ]{2}[a-záéíóúüñ\d\_]{5,11}[a-záéíóúüñ\d]$/;
    if (!regUser.test(user) && !regPassw.test(passw))
        document.cookie=user+"="+passw+";expires=true, 31 Dec 2024 00:00:00 GMT;";
}

function comprobarCookie()
{
    let user = document.getElementById("usuario").value;
    let passw = document.getElementById("passw").value;
    let galletica=document.cookie.split("; ");
    let indice=0;
    let inexiste= true;
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
        let botonEntr=document.getElementById("entrar");
        botonEntr.value = "Cerrar Sesion";
        nombreUser.textContent = user;
    }

}