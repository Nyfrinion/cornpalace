function loadCart(){
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    for (const cartItem of cartItems) {
        // Access individual cart item properties and perform actions
        console.log(cartItem);
    }
}
