/* Toggle navbar links when toggle button is clicked */
const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});

// Declare a global variable to store the original content
var originalContent;

function translatePage() {
  // Get the source language of the page
  var sourceLang = 'id';
  
  // Get the target language to translate to (in this case, Mandarin)
  var targetLang = 'zh-CN';
  
  // Get the content to translate
  originalContent = document.documentElement.innerHTML;
  var content = originalContent;
  
  // Call the Google Cloud Translation API
  var url = 'https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY';
  var data = {
    q: "",
		source: "auto",
		target: "en",
		format: "text",
		api_key: ""
  };
  
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Update the content in the container element with the translated text
    var translation = data.data.translations[0].translatedText;
    document.getElementById('translation').innerHTML = translation;
  });
}

function resetPage() {
  // Restore the original content
  document.getElementById('translation').innerHTML = originalContent;
}



  

