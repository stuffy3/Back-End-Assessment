const pictureContainer = document.querySelector('#pictureContainer')


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("scorpio").onclick = function () {
    axios.get("http://localhost:4000/api/horoscopes/1")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("sagittarius").onclick = function () {
    axios.get("http://localhost:4000/api/horoscopes/2")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("capricorn").onclick = function () {
    axios.get('http://localhost:4000/api/horoscopes/3')
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  document.getElementById("scorpioPic").onclick = function () {
    axios.get("http://localhost:4000/api/horoscopes/images/1")
    .then(function (response) {
        const data = response.data;
        let picture = document.createElement('div');
        picture.innerHTML = `<img src="${data}"/>`
        pictureContainer.appendChild(picture)
      });
      
  };
  document.getElementById("sagittariusPic").onclick = function () {
    axios.get("http://localhost:4000/api/horoscopes/images/2")
    .then(function (response) {
        const data = response.data;
        let picture = document.createElement('div');
        picture.innerHTML = `<img src="${data}"/>`
        pictureContainer.appendChild(picture)
      });
      
  };
  document.getElementById("capricornPic").onclick = function () {
    axios.get('http://localhost:4000/api/horoscopes/images/3')
        .then(function (response) {
          const data = response.data;
          let picture = document.createElement('div');
          picture.innerHTML = `<img src="${data}"/>`
          pictureContainer.appendChild(picture)
        });
        
  };
  let signBtn = document.getElementById("addSignsButton")
  let signsInput = document.getElementById("addSigns")
  console.log(signsInput)

  const addingSigns = () => {
    let body = signsInput.value

    axios.post("http://localhost:4000/api/signs/", {data: body})
    .then(res => {
      alert('Sign Has Been Added!')
    })
    .catch(err => {
      alert("Please Add A Sign.")
    })
  }
 

        signBtn.addEventListener('click', addingSigns);