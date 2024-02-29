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
  data: "https://www.qrcode-monkey.com",
  config: {
      body: "rounded-pointed",
      eye: "frame14",
      eyeBall: "ball16",
      erf1: [],
      erf2: ["fh"],
      erf3: ["fv"],
      brf1: [],
      brf2: ["fh"],
      brf3: ["fv"],
      bodyColor: "#5C8B29",
      bgColor: "#FFFFFF",
      eye1Color: "#3F6B2B",
      eye2Color: "#3F6B2B",
      eye3Color: "#3F6B2B",
      eyeBall1Color: "#60A541",
      eyeBall2Color: "#60A541",
      eyeBall3Color: "#60A541",
      gradientColor1: "#5C8B29",
      gradientColor2: "#25492F",
      gradientType: "radial",
      gradientOnEyes: false,
      logo: ""
  },
  size: 300,
  download: false,
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