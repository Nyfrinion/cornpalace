
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

    var name = document.querySelector('.headbar').textContent;
    console.log(name);
    var product_id = 1; 
    var color = document.getElementById('color').value;
    var size = document.getElementById('sizes').value;
    var link1 = document.getElementById('link1').value;
    var link2 = document.getElementById('link2').value;
    var link3 = document.getElementById('link3').value;
    var link4 = document.getElementById('link4').value;
    var link5 = document.getElementById('link5').value;
    var link6 = document.getElementById('link6').value;
    var link7 = document.getElementById('link7').value;
    var link8 = ''
    var link9 = ''
    var link10 = ''
    var link11 = ''
    var link12 = ''
    var link13 = ''
    var link14 = ''
    var link15 = ''
    var link16 = ''
    var link17 = ''
    var link18 = ''
    var link19 = ''
    var link20 = ''
    var quantity = 1;


    if (link1.length === 0 || link2.length === 0 || link3.length === 0 || link4.length === 0 || link5.length === 0 || link6.length === 0 || link7.length === 0){
      alert("Make sure to fill everything out!");
      console.log('empty');
    }else{
      var newItem = {name: name, product_id: product_id, color: color, size: size, quantity: quantity,
        link1: link1, link2: link2, link3: link3,
        link4: link4,link5: link5,link6: link6,
        link7: link7,link8: link8,link9: link9,
        link10: link10,link11: link11,link12: link12,
        link13: link13,link14: link14,link15: link15,link16: link16,
        link17: link17,link18: link18,link19: link19,
        link20: link20};

        for (var i = 0; i < cartItems.length; i++) {
          var item = cartItems[i];
          if (item.name === newItem.name && item.color === newItem.color && item.size === newItem.size) {
              // Check if all links match
              var linksMatch = true;
              for (var j = 1; j <= 20; j++) {
                  var linkKey = 'link' + j;
                  if (item[linkKey] !== newItem[linkKey]) {
                      linksMatch = false;
                      break;
                  }
              }
              if (linksMatch) {
                  // If all links match, increment quantity and exit loop
                  cartItems[i].quantity += 1;
                  break;
              }
          }
      }
       

      if (!linksMatch){
        cartItems.push(newItem);
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));
  
      closeNotification();
      setTimeout(function() {
        openNotification();
    }, 250);
    
  }
}