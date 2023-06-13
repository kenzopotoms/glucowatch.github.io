function addToCart(product) {
    // Retrieve cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Add the selected product to the cart items
    cartItems.push(product);
  
    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Navigate to the cart page
    window.location.href = 'cart.html';
  }


// Get all the remove buttons
const removeButtons = document.querySelectorAll('.remove-button');

// Add click event listener to each remove button
removeButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the parent cart item element
    const cartItem = button.closest('.cart-item');
    // Remove the cart item from the DOM
    cartItem.remove();
  });
});

// Get the checkout button element
const checkoutButton = document.getElementById('checkout-button');

// Add click event listener to the checkout button
checkoutButton.addEventListener('click', function() {
  // Perform the checkout process here
  // You can implement your desired logic, such as sending the cart data to a server or redirecting to a payment page
  // For this example, we'll simply display an alert indicating the successful checkout
  alert('Bestelling voltooid!');
});