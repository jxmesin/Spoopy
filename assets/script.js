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

/*idea on how to make to save the api output
 
var file = window.URL.createObjectURL(result);
var a = document.createElement("a");
a.href = file;
a.download = "Name of PDF";
document.body.appendChild(a);
a.click();
 
*/
const options = {
	method: 'GET',
	headers: {
		origin: 'example.com',
		'x-requested-with': 'example.com',
		'X-RapidAPI-Key': '7a045ebe84mshf1fbfc93a63591fp1b38b4jsnf62ad6f91c8e',
		'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
	}
};

fetch('https://http-cors-proxy.p.rapidapi.com/https://jsonplaceholder.typicode.com/posts/1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const firstUrl = "http-cors-proxy.p.rapidapi.com/"
var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');
var requestUrl = 'https://generatorfun.com/consumeapi.php?api=39&apisecret=978c05-79094e-b07c06-d75f84-57ad6e'
var requestUrltwo = 'https://generatorfun.com/consumeapi.php?api=2325&apisecret=944d63-8986a4-ed361f-a7c6a4-bf1f03'
const fetchDataBtn = document.querySelector('#fetchdata')
const result = document.querySelector('#result')

// gets data from API and sets the content of #result div
const getData = function() {
  result.innerText = 'Loading....'
  const options = {
    method: 'GET',
    headers: {
      origin: 'example.com',
      'x-requested-with': 'example.com',
      'X-RapidAPI-Key': '7a045ebe84mshf1fbfc93a63591fp1b38b4jsnf62ad6f91c8e',
      'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    }
  };
  
  fetch('https://http-cors-proxy.p.rapidapi.com/https://generatorfun.com/consumeapi.php?api=39&apisecret=978c05-79094e-b07c06-d75f84-57ad6e', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      result.innerText = response
    }) 
    .catch(err => console.error(err));
}



// add event listener for #fetchdata button
fetchDataBtn.addEventListener('click', getData)



const getData2 = function() {
  result.innerText = 'Loading....'
  const options = {
    method: 'GET',
    headers: {
      origin: 'example.com',
      'x-requested-with': 'example.com',
      'X-RapidAPI-Key': '7a045ebe84mshf1fbfc93a63591fp1b38b4jsnf62ad6f91c8e',
      'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    }
  };
  
  fetch('https://http-cors-proxy.p.rapidapi.com/https://generatorfun.com/consumeapi.php?api=2325&apisecret=944d63-8986a4-ed361f-a7c6a4-bf1f03', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      result2.innerText = response
    }) 
    .catch(err => console.error(err));
    
}

fetchDataBtn.addEventListener('click', getData2)


const getData3 = function() {
  result.innerText = 'Loading....'
  const options = {
    method: 'GET',
    headers: {
      origin: 'example.com',
      'x-requested-with': 'example.com',
      'X-RapidAPI-Key': '7a045ebe84mshf1fbfc93a63591fp1b38b4jsnf62ad6f91c8e',
      'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    }
  };
  
  fetch('https://http-cors-proxy.p.rapidapi.com/https://generatorfun.com/consumeapi.php?api=16&apisecret=9643d9-9ccd5e-367577-5c01ee-af4a3c', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      result3.innerText = response
    }) 
    .catch(err => console.error(err));
    
}



// add event listener for #fetch data button
fetchDataBtn.addEventListener('click', getData3)

 

