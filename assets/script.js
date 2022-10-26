// Get the modal
var modal = document.getElementById("modal-content");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*idea on how to make to save the api output
 
var file = window.URL.createObjectURL(result);
var a = document.createElement("a");
a.href = file;
a.download = "Name of PDF";
document.body.appendChild(a);
a.click();
 
*/
 
var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
 
function getApi() {
  
  var requestUrl = 'https://generatorfun.com/halloween-costume-generator';
 
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}
 
fetchButton.addEventListener('click', getApi);


