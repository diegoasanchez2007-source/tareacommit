const screens = [...document.querySelectorAll('.pantalla')];
const botones = document.querySelectorAll('.nav-btn, [data-go], [data-screen-link]');

function mostrarPantalla(id) {
	screens.forEach((pantalla) => {
		pantalla.hidden = pantalla.id !== id;
		pantalla.classList.toggle('activa', pantalla.id === id);
	});
	document.querySelectorAll('.nav-btn').forEach((boton) => {
		boton.classList.toggle('active', boton.dataset.screen === id);
	});
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

botones.forEach((boton) => {
	boton.addEventListener('click', () => {
		const id = boton.dataset.screen || boton.dataset.go || boton.dataset.screenLink;
		if (id) mostrarPantalla(id);
	});
});

document.querySelectorAll('.add-button').forEach((boton) => {
	boton.addEventListener('click', () => {
		const toast = document.querySelector('#toast');
		toast.textContent = `${boton.dataset.product} añadido a tu pedido.`;
		toast.classList.add('show');
		window.setTimeout(() => toast.classList.remove('show'), 2000);
	});
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
mostrarPantalla('inicio');
