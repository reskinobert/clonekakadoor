
// card project list---------------------------------------------------------------------------------

const apiResult = [
    {
    title: "Hotel 1",
    img: "./images/logocust/adhi persada gedung.png",
    tipe: "hotel"
  }, {
    title: "Hotel 2",
    img: "images/logocust/agung-podomoro-land-logo.jpg",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/ayody logo.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/other/mapolda jatim.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/logo_home.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/logoipbMBKM.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/logo-unnes-horizontal-white-yellow.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/Pakuwon_Mall_logo.svg",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/sentul-city_169.jpeg",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/sianarmas.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/Logo-Bethsaida-Hospitals.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/other/sampoerna.jpg",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/sm-logo.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/hospital/rs bayangkara bali.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/hospital/rs bayangkara surabaya.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/hospital/siloam.png",
    tipe: "hote2"
  }, {
    title: "Hotel 2",
    img: "images/logocust/hospital/rs soetome.png",
    tipe: "hote2"
  }
];
  
  
  const container = document.getElementById('card-customers');
  
  apiResult.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'img-cust';
  
    // Construct card content
    const content = `
      <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#card-customers">
        <div class="img-cust-cont">
        
          <img class= "img-cust" src="${result.img}" width="148px"alt="">

        </div>
      </div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content;
  })