const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// Get all remove buttons
const removeButtons = document.querySelectorAll('#cart tbody td:first-child a');

// Loop through each remove button
removeButtons.forEach(removeButton => {
  // Add click event listener to remove button
  removeButton.addEventListener('click', () => {
    // Get the parent table row of the remove button
    const row = removeButton.parentNode.parentNode;
    // Remove the row from the table
    row.remove();
  });
});
// JavaScript code
const addToCartButton = document.getElementById("add-to-cart-button");
const cartSection = document.getElementById("cart-section");
let cartItems = [];

addToCartButton.addEventListener("click", function() {
  // Get the product details
  const product = {
    name: "Product name",
    price: 9.99,
    quantity: 1
  };

  // Add the product to the cart
  cartItems.push(product);

  // Update the cart section
  cartSection.innerHTML = `
    <h2>Cart</h2>
    <ul>
      ${cartItems.map(item => `
        <li>${item.name} - $${item.price} x ${item.quantity}</li>
      `).join("")}
    </ul>
  `;
});

const { Client } = require('pg');

const client = new Client({
  user: 'your-username',
  host: 'localhost',
  database: 'shop',
  password: '123456',
  port: 5432,
});

client.connect();

client.query('SELECT * FROM users', (err, res) => {
  if (err) throw err;
  console.log(res.rows);
  client.end();
});

