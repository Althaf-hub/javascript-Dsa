const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 3 }
];

const total = cart.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log(total);