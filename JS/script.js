function windowOpen(){
    window.open("sign-in-out.html");
}

function paymentWindow(){
    window.open("payment.html");
}

function windowOpen1(){
    window.open("book_1.html");
}

function showSignUpForm() {
document.getElementById("signin-form").style.display = "none";
document.getElementById("signup-form").style.display = "block";
}

function showSignInForm() {
document.getElementById("signup-form").style.display = "none";
document.getElementById("signin-form").style.display = "block";
}

// Cart
let cart = [];
function addToCart(bookName, price) {
    const existingItem = cart.find(item => item.bookName === bookName);
  
    if (existingItem) {
      existingItem.price += price;
    } else {
      const item = {
        bookName: bookName,
        price: price,
      };
      cart.push(item);
    }
  
    updateCartUI();
  }
  
function updateCartUI() {
    const cartContainer = document.getElementById("cart");
  
    const cartList = document.createElement("ul");
    cartList.id = "cart-list";
  
    let totalPrice = 0;
  
    for (const item of cart) {
      totalPrice += item.price;
      const listItem = document.createElement("li");
      listItem.textContent = `${item.bookName} - Rs.${item.price.toFixed(2)}`;
      cartList.appendChild(listItem);
    }
  
    const totalElement = document.createElement("p");
    totalElement.textContent = `Total: Rs.${totalPrice.toFixed(2)}`;
  
    cartContainer.innerHTML = "";
    cartContainer.appendChild(cartList);
    cartContainer.appendChild(totalElement);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
  
    if (paymentForm) {
      const submitButton = document.getElementById("submit-payment");
  
      submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Payment successful!");
      });
    }
  });