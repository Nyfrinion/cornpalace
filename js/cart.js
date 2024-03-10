//const express = require('express');
//const mysql = require('mysql');
//const app = express();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Kime141618!',
    database: 'shopdb'
  });


document.addEventListener('DOMContentLoaded', function() {
    loadCart();
});

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
        var nameHeader = document.createElement('th');
        var priceHeader = document.createElement('th');
        var infoHeader = document.createElement('th');

        nameHeader.textContent = 'Item Name';
        infoHeader.textContent = 'Info';
        priceHeader.textContent = 'Price';

        headerRow.appendChild(nameHeader);
        headerRow.appendChild(infoHeader);
        headerRow.appendChild(priceHeader);
        table.appendChild(headerRow);

        //parse cart items
        for (const cartItem of cartItems) {
            var row = document.createElement('tr');

            var itemNameCell = document.createElement('td');
            var itemInfoCell = document.createElement('td');
            var itemPriceCell = document.createElement('td');

            itemNameCell.innerHTML = '<img src="/assets/img/shirt1.png"></img>';
            itemInfoCell.innerHTML = "Name: " + cartItem.name + "<br>Size: " + cartItem.size + '<br>Color: ' + cartItem.color + '<br>' + "QR Codes: ";
            
            pool.query('SELECT price FROM products WHERE name = ?', [cartItem.name], function(error, results, fields) {
                if (error) {
                    console.error('Error fetching price from database:', error);
                    return;
                }

                if (results.length > 0) {
                    var price = results[0].price;
                    itemPriceCell.textContent = price;
                } else {
                    console.error('Product not found in database:', cartItem.name);
                }
            });

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

            row.appendChild(itemNameCell);
            row.appendChild(itemInfoCell);
            row.appendChild(itemPriceCell);
            table.appendChild(row);
        }
        cartElement.appendChild(table);

    } else {
        console.error('Cart element not found.');
    }
}
