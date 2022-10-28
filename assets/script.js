var modal = document.getElementById("modal-content");
var btn = document.getElementById("modal-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal1 = document.getElementById("modal-content1");
var cbtn = document.getElementById("cbtn");
var span1 = document.getElementsByClassName("close1")[0];

cbtn.onclick = function() {
  modal1.style.display = "block";
  modal.style.display = "none";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
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

// Local Storage here I guess??? - Magerick