import faker from "faker";

export function mount(el) {
	let products = "";

	for (let i = 0; i < 5; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}

	el.innerHTML = products;
}
