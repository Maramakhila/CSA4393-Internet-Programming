// Array to hold cart items
let cartItems = [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    // Add item to cart array
    cartItems.push({ name: itemName, price: itemPrice });

    // Display a pop-up message
    alert(itemName + " has been added to your cart!");

    // Update the "Order Details" field
    updateOrderDetails();
}

// Function to update the "Order Details" field
function updateOrderDetails() {
    const orderDetailsField = document.getElementById('order-details');
    let orderDetailsText = "";

    cartItems.forEach((item, index) => {
        orderDetailsText += (index + 1) + ". " + item.name + " - $" + item.price.toFixed(2) + "\n";
    });

    orderDetailsField.value = orderDetailsText;
}

// Function to handle form submission for order placement
function placeOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return false;
    }

    // Display a message and clear the cart
    alert("Your order has been placed successfully!");
    cartItems = [];
    updateOrderDetails();

    return true; // Allow form submission
}

// Function to handle payment
function processPayment() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return false;
    }

    // Display a message and clear the cart
    alert("Payment successful!");
    cartItems = [];
    updateOrderDetails();

    return true; // Allow form submission
}

function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert('Username or email already taken.');
        return false;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful');
    window.location.href = 'login.html';
    return false;
}

function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful');
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
    return false;
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
}

function logout() {
    // Clear any user session data if necessary
    alert('You have been logged out.');
    // Redirect to the login page
    window.location.href = 'login.html';
}







