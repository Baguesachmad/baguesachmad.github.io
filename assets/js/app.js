let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produk ditambahkan!");
}

if (document.getElementById("cartItems")) {
  let container = document.getElementById("cartItems");
  cart.forEach(item => {
    container.innerHTML += `<p>${item.name} - Rp ${item.price}</p>`;
  });
}

let searchInput = document.getElementById("searchInput");
let categoryFilter = document.getElementById("categoryFilter");

function filterProducts() {
  let searchValue = searchInput.value.toLowerCase();
  let categoryValue = categoryFilter.value;

  document.querySelectorAll(".card").forEach(card => {
    let name = card.dataset.name.toLowerCase();
    let category = card.dataset.category;

    let matchSearch = name.includes(searchValue);
    let matchCategory = categoryValue === "All" || category === categoryValue;

    card.style.display = (matchSearch && matchCategory) ? "block" : "none";
  });
}

if (searchInput) searchInput.addEventListener("keyup", filterProducts);
if (categoryFilter) categoryFilter.addEventListener("change", filterProducts);
