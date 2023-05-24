const listhotels = [
    {
    title: "Hotel 1",
    img: "images/download.jpg"
  }, {
    title: "Hotel 2",
    img: "images/download.jpg"
  }, {
    title: "Hotel 3",
    img: "images/download.jpg"
  }
  ];
  const listhospitals = [
    {
    title: "Hospital 1",
    img: "images/download.jpg"
  }, {
    title: "Hospital 2",
    img: "images/download.jpg"
  }, {
    title: "Hospital 3",
    img: "images/download.jpg"
  }
  ];
  const listresidences = [
    {
    title: "Residence 1",
    img: "images/download.jpg"
  }, {
    title: "Residence 2",
    img: "images/download.jpg"
  }, {
    title: "Residence 3",
    img: "images/download.jpg"
  }
  ];
  const listothers = [
    {
    title: "Other 1",
    img: "images/download.jpg"
  }, {
    title: "Other 1",
    img: "images/download.jpg"
  }, {
    title: "Other 1",
    img: "images/download.jpg"
  }
  ];


document.getElementById("hotels").onclick = function() {myFunction(listhotels)};

function myFunction(apiResult) {

    const container = document.getElementById('projects');


    apiResult.forEach((result, idx) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card-body';
      
        // Construct card content
        const content = `
          
            <div class="list-pro row" id="collapse-${idx}" aria-labelledby="heading-${idx}" data-parent="#projects">
      
                  <div class="container-project">
                    <a class="lightbox" href="${result.img}">
                        <img src="${result.img}">
                        
                        <h4>${result.title}</h4>
                    </a>
                  </div>
              
            </div>
        
        `;
      
        // Append newyly created card element to the container
        container.innerHTML += content;
      })
}