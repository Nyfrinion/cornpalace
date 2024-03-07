
console.log('roygbiv LOADED');

document.addEventListener("DOMContentLoaded", function() {
  var addCartButtons = document.querySelectorAll(".bluebutton");

  addCartButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent form submission

          console.log("Add to Cart button clicked");
          
           addToCart();
           updateCartCount();
      });
  });
});

function addToCart(){
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    var name = document.querySelector('.headbar').value;
    var color = document.getElementById('color').value;
    var size = document.getElementById('sizes').value;
    var link1 = document.getElementById('link1').value;
    var link2 = document.getElementById('link2').value;
    var link3 = document.getElementById('link3').value;
    var link4 = document.getElementById('link4').value;
    var link5 = document.getElementById('link5').value;
    var link6 = document.getElementById('link6').value;
    var link7 = document.getElementById('link7').value;

    if (link1.length === 0 || link2.length === 0 || link3.length === 0 || link4.length === 0 || link5.length === 0 || link6.length === 0 || link7.length === 0){
      alert("Make sure to fill everything out!");
      console.log('empty');
    }else{
      var newItem = {name: name, color: color, size: size};
      cartItems.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cartItems));
  
      openNotification();
    }
}