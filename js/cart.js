document.addEventListener('DOMContentLoaded', function() {

    var updateButton = document.getElementById('updateButton');

    updateButton.addEventListener('click', function() {
        location.reload();
    });

    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cartItems);
    var count = 0; 
    var subtotal = 0;

    if (cartItems.length > 0){
        loadCart();
    }

    cartItems.forEach((cartItem, index) => {
        var quantityInput = document.querySelectorAll(".quantity");
        console.log(cartItem);
        fetch('http://localhost:3000/products/')
        .then(response => response.json())
        .then(data =>{ 
            const priceContainer = document.querySelectorAll('.price');
            data.forEach(product => {
                if(cartItem.name === product.name){
                    console.log(product.price);
                    priceContainer[count].innerHTML = "$" + (product.price * cartItem.quantity).toFixed(2);
                }else{
                    console.log("nothing");
                }
                subtotal = subtotal + parseFloat(product.price * cartItem.quantity); 
                quantityInput[count].value = cartItem.quantity;
                quantityInput[count].addEventListener('change', function() {
                    console.log("ran");
                    console.log(quantityInput[index].value);
                    cartItem.quantity = quantityInput[index].value;
                    updateLocalStorage(cartItems);
                });
                count++;
            });
            console.log(subtotal);
            subtotal.toFixed(2);
            document.querySelector('.subtotal').innerHTML = "Subtotal: $" + subtotal.toFixed(2) + "<br>Shipping is calculated at checkout.";
        })
    });
});

function updateLocalStorage(cartItems){
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function loadCart(){
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    var cartElement = document.getElementById('cart');

    if (cartElement) {

        //clear div
        cartElement.innerHTML = '';

        //creating table
        var table = document.createElement('table');
        table.classList.add('cart-table');

        //creating table header
        var headerRow = document.createElement('tr');
        var removeHeader = document.createElement('th');
        var quantityHeader = document.createElement('th');
        var imageHeader = document.createElement('th');
        var priceHeader = document.createElement('th');
        var infoHeader = document.createElement('th');

        imageHeader.textContent = '';
        infoHeader.textContent = 'Info';
        priceHeader.textContent = 'Price';
        quantityHeader.textContent = 'Quantity';

        headerRow.appendChild(removeHeader);
        headerRow.appendChild(imageHeader);
        headerRow.appendChild(infoHeader);
        headerRow.appendChild(quantityHeader);
        headerRow.appendChild(priceHeader);
        table.appendChild(headerRow);

        //parse cart items
        for (const cartItem of cartItems) {
            var row = document.createElement('tr');

            var removeCell = document.createElement('td');
            var itemImageCell = document.createElement('td');
            var itemInfoCell = document.createElement('td');
            var itemQuantityCell = document.createElement('td');
            var itemPriceCell = document.createElement('td');
            itemPriceCell.classList.add('price');

            var removeLink = document.createElement('a');
            removeLink.href = "#";
            removeLink.classList.add("remove");
            removeLink.textContent = "Remove";
            removeLink.addEventListener('click', function(event) {
                event.preventDefault();
                var row = this.closest('tr');
                if (row) {
                    var rowIndex = Array.from(row.parentNode.children).indexOf(row);
                    console.log("Row index:", rowIndex);
                    row.remove();
                    cartItems.splice(rowIndex-1, 1);
                    console.log("Updated cartItems:", cartItems); // Debugging
                    localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
                }
            });
            
            
            
            removeCell.appendChild(removeLink);

            itemImageCell.innerHTML = '<img src="/assets/img/shirt1.png"></img>';
            itemInfoCell.innerHTML = "Name: " + cartItem.name + "<br>Size: " + cartItem.size + '<br>Color: ' + cartItem.color + '<br>' + "QR Codes: ";
            itemQuantityCell.innerHTML = '<label for="quantity">Quantity: </label><input type="number" class="quantity" name="quantity" min="1" max="9999">';

            var select = document.createElement('select');
            for (var i = 1; i <= 20; i++) {
                var linkKey = 'link' + i;
                if (cartItem[linkKey]) {
                    var option = document.createElement('option');
                    option.value = cartItem[linkKey];
                    option.textContent = cartItem[linkKey];
                    select.appendChild(option);
                }
            }
            itemInfoCell.appendChild(select);

            row.appendChild(removeCell);
            row.appendChild(itemImageCell);
            row.appendChild(itemInfoCell);
            row.appendChild(itemQuantityCell);
            row.appendChild(itemPriceCell);
            table.appendChild(row);
        }
        cartElement.appendChild(table);

    } else {
        console.error('Cart element not found.');
    }
}