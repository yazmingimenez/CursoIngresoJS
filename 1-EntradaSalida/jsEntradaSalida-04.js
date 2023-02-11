/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;

    // using optional chaining ?.
   nombreIngresado = document.getElementById("txtIdNombre").value;
   edadIngresada = document.getElementById("txtIdEdad").value;
   
   alert("usted se llama "  +  txtIdNombre.value + " y tiene "  + txtIdEdad.value  + " años ");



}

