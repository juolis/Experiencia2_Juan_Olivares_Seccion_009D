<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

$(function() 
{
  $("#mi-formulario").validate({
       rules: {
              email: {
                  required: true,
                  email: true
              },
              password: "required",
              fono: "required",
              fecha: "required",
              password2: {
                  required: true,
                  equalTo: "#password"
              }   
              
          }, //rules
      messages: {
          email: {
              required: 'Ingresa tu correo electrónico',
              email: 'Formato de correo no válido'
          },
          password: {
              required: 'Ingresa una contraseña',
              minlength: 'Caracteres insuficientes'
          },
          fono:{
              required: 'Ingrese un número de celular',
              minlength: 'Cantidad de digitos insuficiente'
          },
          fecha:{
              required: 'Seleccione una fecha válida',
              min: 'Fecha no corresponde'
          },
          password2: {
              required: 'Reingresa la contraseña',
              equalTo: 'Las contraseñas ingresadas no coinciden',
              minlength: 'Caracteres insuficientes'

          }
      }//messages
  }); //$('#mi-formulario').validate
}); //function