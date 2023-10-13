//Elementos del DOM utilizados.
const btnCambiarColor = document.querySelector('button');
const codigoDelColor = document.getElementById('color');

//Función que genera el color hexadecimal aleatoriamente.
generarColorAleatorio = () => {
	let digitos = '0123456789abcdef';
	let color = '#';

	for (let i = 0; i < 6; i++) {
		let indiceAleatorio = Math.floor(Math.random() * 16);
		color += digitos[indiceAleatorio];
	}
	return color;
};

//Evento botón que ejecuta una función flecha que muestra el color aleatoriamente, actualiza el código del color hexadecimal y actualiza el color de fondo del navegador web.
btnCambiarColor.addEventListener('click', () => {
	let colorAleatorio = generarColorAleatorio();
	//Actualizar el código del color hexadecimal.
	codigoDelColor.textContent = colorAleatorio;
	//Actualizar el color del background.
	document.body.style.backgroundColor = colorAleatorio;
});
