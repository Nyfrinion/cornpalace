// JavaScript code for form validation and submission
document.addEventListener("DOMContentLoaded", function() {
  var addCartButtons = document.querySelectorAll(".bluebutton");
  
  addCartButtons.forEach(function(button) {
      button.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent form submission; keeps it from reloading the page or something

          console.log("LOGGED");
          var selectedColor = document.getElementById("color").value;
          var selectedSize = document.getElementById("sizes").value;
          var itemName = document.querySelector(".headbar").textContent;
          var link1 = document.getElementById("link1").value;
          var link2 = document.getElementById("link2").value;
          var link3 = document.getElementById("link3").value;
          var link4 = document.getElementById("link4").value;
          var link5 = document.getElementById("link5").value;
          var link6 = document.getElementById("link6").value;
          var link7 = document.getElementById("link7").value;

          var cartItems = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart items or initialize an empty array
          var newItem = { itemName: itemName, color: selectedColor, size: selectedSize, links: [link1, link2, link3, link4, link5, link6, link7] }; // Create new item object with entered color and size
          cartItems.push(newItem); // Add new item to cart
          localStorage.setItem("cart", JSON.stringify(cartItems)); // Store updated cart in localStorage
          console.log(newItem);
      });
  });
});




// Define request data
const requestData = {
  data: "https://www.nightwalk.org",
  config: {
      body: "square",
      eye: "frame0",
      eyeBall: "ball0",
      bodyColor: "#af0013",
      bgColor: "#ff5454",
      eye1Color: "#af0013",
      eye2Color: "#af0013",
      eye3Color: "#af0013",
      eyeBall1Color: "#af0013",
      eyeBall2Color: "#af0013",
      eyeBall3Color: "#af0013",
      logo: ""
  },
  size: 300,
  download: true,
  file: "svg"
};

// Make POST request using Axios
axios.post('https://api.qrcode-monkey.com/qr/custom', requestData)
  .then(response => {
      console.log("QR Code URL:", response.data.imageUrl);
      const qrurl = response.data.imageUrl;
      displayqrcode(qrurl)
  })
  .catch(error => {
      console.error("Error making request:", error);
  });

  function displayqrcode(qrurl){
    const qrimg = document.createElement('img');
    qrimg.src = qrurl;
    const qrcontainer = document.getElementById('qrcontainer');
    qrcontainer.appendChild(qrimg);

  }