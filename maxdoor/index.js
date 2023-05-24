
// card project list---------------------------------------------------------------------------------

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
  title: "Other 2",
  img: "images/download.jpg"
}, {
  title: "Other 3",
  img: "images/download.jpg"
}
];

const apiResult = listhotels.concat(listhospitals, listresidences, listothers); 

// if(document.getElementById("hotels").onclick){var apiResult= listhotels}
// else if(document.getElementById("hospitals").onclick){var apiResult= listhospitals}
// else if(document.getElementById("residences").onclick){var apiResult= listresidences}
// else if(document.getElementById("others").onclick) {var apiResult= listothers}
// else{var apiResult= listall}

const container = document.getElementById('projects');
const container1 = document.getElementById('projects1');
const container2 = document.getElementById('projects2');
const container3 = document.getElementById('projects3');
const container4 = document.getElementById('projects4');


apiResult.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
    
      <div class="row" id="collapse-${idx}" aria-labelledby="heading-${idx}" data-parent="#projects">

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

listhotels.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
    
      <div class="list-all row" id="collapse-${idx}" aria-labelledby="heading-${idx}" data-parent="#projects">

            <div class="container-project">
              <a class="lightbox" href="${result.img}">
                  <img src="${result.img}">
                  
                  <h4>${result.title}</h4>
              </a>
            </div>
        
      </div>
  
  `;

  // Append newyly created card element to the container
  container1.innerHTML += content;
})

listhospitals.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
    
      <div class="list-all row" id="collapse-${idx}" aria-labelledby="heading-${idx}" data-parent="#projects">

            <div class="container-project">
              <a class="lightbox" href="${result.img}">
                  <img src="${result.img}">
                  
                  <h4>${result.title}</h4>
              </a>
            </div>
        
      </div>
  
  `;

  // Append newyly created card element to the container
  container2.innerHTML += content;
})

listresidences.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
    
      <div class="list-all row" id="collapse-${idx}" aria-labelledby="heading-${idx}" data-parent="#projects">

            <div class="container-project">
              <a class="lightbox" href="${result.img}">
                  <img src="${result.img}">
                  
                  <h4>${result.title}</h4>
              </a>
            </div>
        
      </div>
  
  `;

  // Append newyly created card element to the container
  container3.innerHTML += content;
})

listothers.forEach((result, idx) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'card-body';

  // Construct card content
  const content = `
    
      <div class="list-all row" id="collapse-${idx}" aria-labelledby="heading-${idx}" data-parent="#projects">

            <div class="container-project">
              <a class="lightbox" href="${result.img}">
                  <img src="${result.img}">
                  
                  <h4>${result.title}</h4>
              </a>
            </div>
        
      </div>
  
  `;

  // Append newyly created card element to the container
  container4.innerHTML += content;
})


// document.getElementById("hotels").onclick?