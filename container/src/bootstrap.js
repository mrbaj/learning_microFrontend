import { mount } from "products/ProductsIndex";
import { mount as mountCart } from "cart/showCart";

mount(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
console.log("container");
