import facker from "faker";

export function mount(el) {
	const cartText = `<div>You have ${facker.random.number(
		20
	)} items in your cart</div>`;

	el.innerHTML = cartText;
}

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#dev-cart");

	if (el) {
		mount(el);
	}
}
