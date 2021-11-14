const typed = new Typed('.typed', {
	strings: [
		'<i class="mascota">te amo</i>',
		'<i class="mascota">Mucho, muchisimo</i>',
		'<i class="mascota">¿cuanto?</i>',
		'<i class="mascota">desde la tierra <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/192F/production/_111874460_gettyimages-1162834347-1.jpg" alt=""></i>',
		'<i class="mascota">hasta saturno <img src="https://static.vix.com/es/sites/default/files/styles/4x3/public/btg/curiosidades.batanga.com/files/8-cosas-sobre-Saturno-que-quiza-no-sabias.jpg" alt=""></i>'
		'<i class="mascota">ok bonita?</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
