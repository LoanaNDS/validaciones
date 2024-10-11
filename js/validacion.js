
const boton = document.getElementById("botoncito")
const validacionformulario = document.getElementById("formulario")
document.addEventListener("DOMContentLoaded", ()=>{
    boton.addEventListener("click",()=>{
       const contrasena = document.getElementById("password1")
       const repetircontrasena = document.getElementById("password2")
        function validarcontrasena(){
            if ((contrasena.checkValidity()) && (contrasena === repetircontrasena))
                {
                    repetircontrasena.setCustomValidity("todo esta correcto");
                } else{
                    repetircontrasena.setCustomValidity("invalido");
                }
                repetircontrasena.reportValidity();
        }
        validarcontrasena()
function validaciondedatos() {
validacionformulario.checkValidity();
}
validaciondedatos(validacionformulario)
    })
})