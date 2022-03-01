var formulario = document.getElementsByClassName('formulario')[0],
elementos = formulario.elements,
boton= document.getElementsByName ('button');

var validarNombre = function(e){
    if (formulario.Nombres.value == 0){
        alert ("Completa el campo Nombres");
        e.preventDefault();
    }
};


var validarApellidos = function(e){
    if (formulario.Apellidos.value == 0){
        alert ("Completa el campo Apellidos");
        e.preventDefault();
    }
};


var validarCorreo = function(e){
    if (formulario.Correo.value == 0){
        alert ("Completa el campo Correo");
        e.preventDefault();
    }
};


var validarCelular = function(e){
    if (formulario.Celular.value == 0){
        alert ("Completa el campo Celular ");
        e.preventDefault();
    }
};

var validarMensaje= function(e){
    if (formulario.Mensaje.value == 0){
        alert ("Completa el campo Mensaje ");
        e.preventDefault();
    }
};

var validarCheckbox= function(e){
    if (formulario.Terminos.checked == false) {
        alert ("Acepta los Terminos y Condiciones ");
        e.preventDefault();
    }
};

var validar = function(e){
validarNombre (e);
validarApellidos (e);
validarCorreo (e);
validarCelular  (e);  
validarMensaje  (e);
validarCheckbox (e);
    };

formulario.addEventListener("submit",validar);













