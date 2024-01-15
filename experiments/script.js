function login(event) {
    event.preventDefault();

    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    // window.location syntax redirects the sign in page to the POS page
    // if the login credentials entered are correct
    if (un=="admin" && pw=="admin"){
        window.location.replace("POS.html");
    }
    else if(un=="Admin" && pw=="Admin"){
        window.location.replace("POS.html");
    }
    else if(un=="AMJ" && pw=="AMJ"){
        window.location.replace("POS.html");
    }
    else {
         alert("Invalid Username and Password");
    }


}



//the event listener ensures the DOM content is fully loaded before executing
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const restockButton = document.getElementById('restock');
    const checkoutButton = document.getElementById('checkout');
    const quantityInputs = document.querySelectorAll('.quantity');
    const stockElements = document.querySelectorAll('.stock');

    const receiptList = document.getElementById('receipt-list');
    const totalAmountElement = document.getElementById('total-amount');
    let totalAmount = 0;

    function addToCart(productName, productPrice, quantity) {
        totalAmount += productPrice * quantity;
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} (x${quantity}): ₱${(productPrice * quantity).toFixed(2)}`;
        receiptList.appendChild(listItem);
        totalAmountElement.textContent = `₱${totalAmount.toFixed(2)}`;
    }

    function clearReceipt() {
        receiptList.innerHTML = ''; // Clear the receipt list
        totalAmount = 0;
        totalAmountElement.textContent = '₱0.00'; // Reset total amount
    }

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const productRow = this.parentElement.parentElement;
            const productName = productRow.querySelector('.product-name').textContent;
            const productPrice = parseFloat(productRow.querySelector('.product-price').textContent.slice(1));
            const quantity = parseInt(productRow.querySelector('.quantity').value);
            let stock = parseInt(stockElements[index].textContent);

            if (quantity > 0 && quantity <= stock) {
                addToCart(productName, productPrice, quantity);
                stock -= quantity; // Decrement stock
                stockElements[index].textContent = stock; // Update the stock displayed
            } else if (quantity > stock) {
                alert("Not enough stock available.");
            } else {
                alert("Input is Invalid");
            }
        });
    });

    restockButton.addEventListener('click', function () {
        stockElements.forEach(stockElement => {
            stockElement.textContent = '100'; // Change value here to change value of all stocks
        });
    });

    checkoutButton.addEventListener('click', function () {
        alert(`Total Amount: ₱${totalAmount.toFixed(2)}`);
        clearReceipt(); // Clear the receipt after checking out
    });

    quantityInputs.forEach(input => {
        input.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '');
        });
    });

    logoutButton.preventDefault('click', function logout(event) {
        window.location.replace("Login.html");
    });



    function logout(event) {
        event.preventDefault();
    window.location.replace("Login.html");
}



});