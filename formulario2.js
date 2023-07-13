const miFormulario= document.getElementById('form-registrar');

miFormulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    registrar();
})

function registrar() {
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let sede = document.getElementById('sede').value;
    let mensaje = document.getElementById('mensaje').value;

//Objeto para almacenar los datos del usuario
    const usuario = {
        nombre: nombre, 
        telefono: telefono,
        email: email,
        sede: sede,
        mensaje: mensaje
    };

//Guardo el objeto de usuario en el localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

//limpio los campos del formulario
    miFormulario.reset();

    alert('Mensaje Enviado');
}