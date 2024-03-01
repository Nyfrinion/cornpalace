// Import Axios library

document.addEventListener('DOMContentLoaded', function() {
    const glassCheckbox = document.getElementById('glass');
    const searchbox = document.querySelector('.searchbox');

    glassCheckbox.addEventListener('change', function() {
      if (this.checked) {
        searchbox.style.display = 'flex';
      } else {
        searchbox.style.display = 'none';
      }
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
  function closeSearch(){
    document.getElementById('glass').checked = false;
    document.querySelector('.searchbox').style.display = 'none';
    console.log('HEY');
  }