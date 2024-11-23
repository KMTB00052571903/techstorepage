document.addEventListener('DOMContentLoaded', () => {
  const cartContainer = document.querySelector('.addition');
  const totalElement = document.querySelector('.checkout h4');
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Asegurarse de que loggedInUser no sea null antes de continuar
  if (!loggedInUser) {
      console.error("No se encontró el usuario logueado. Redirigiendo a login...");
      window.location.href = "login.html";
      return;
  }

  const cartKey = `cart_${loggedInUser.email}`;
  const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  // Función para renderizar los productos del carrito
  const renderCart = () => {
      cartContainer.innerHTML = '';

      if (cart.length === 0) {
          cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
          updateTotal();
          return;
      }

      cart.forEach((item, index) => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <div class="cart-item-details">
                  <p>${item.title} - USD $${item.price.toFixed(2)}, Cantidad: ${item.quantity}, ID: ${item.id}</p>
              </div>
              <div class="cart-item-actions">
                  <button class="decrement" data-index="${index}">-</button>
                  <button class="increment" data-index="${index}">+</button>
                  <button class="remove" data-index="${index}">Eliminar</button>
              </div>
          `;
          cartContainer.appendChild(cartItem);
      });

      addEventListeners();
      updateTotal();
  };

  // Función para actualizar el total
  const updateTotal = () => {
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      totalElement.textContent = `TOTAL: $${total.toFixed(2)}`;
  };

  // Función para manejar eventos en botones
  const addEventListeners = () => {
      const decrementButtons = document.querySelectorAll('.decrement');
      const incrementButtons = document.querySelectorAll('.increment');
      const removeButtons = document.querySelectorAll('.remove');

      decrementButtons.forEach(button => {
          button.addEventListener('click', (e) => {
              const index = e.target.dataset.index;
              if (cart[index].quantity > 1) {
                  cart[index].quantity--;
              } else {
                  cart.splice(index, 1);
              }
              updateCart();
          });
      });

      incrementButtons.forEach(button => {
          button.addEventListener('click', (e) => {
              const index = e.target.dataset.index;
              cart[index].quantity++;
              updateCart();
          });
      });

      removeButtons.forEach(button => {
          button.addEventListener('click', (e) => {
              const index = e.target.dataset.index;
              cart.splice(index, 1);
              updateCart();
          });
      });
  };

  // Función para actualizar el carrito en localStorage y re-renderizar
  const updateCart = () => {
      localStorage.setItem(cartKey, JSON.stringify(cart));
      renderCart();
  };

  // Inicializa el renderizado del carrito
  renderCart();
});
