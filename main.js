fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <h3>${prod.name}</h3>
        <p>${prod.description}</p>
        <p>Rp ${prod.price.toLocaleString()}</p>
        <button class="add-to-cart" data-id="${prod.id}">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  });
