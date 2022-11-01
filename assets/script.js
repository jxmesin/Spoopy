//all modal content
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
  url: 'https://http-cors-proxy.p.rapidapi.com/https://jsonplaceholder.typicode.com/posts/1',
  headers: {
    origin: 'example.com',
    'x-requested-with': 'example.com',
    'X-RapidAPI-Key': '0d8416f193msh56444f997718e79p1dd0e7jsn9fb1f5e138bd',
    'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
  }
};


fetch('https://http-cors-proxy.p.rapidapi.com', options)
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
      'X-RapidAPI-Key': '0d8416f193msh56444f997718e79p1dd0e7jsn9fb1f5e138bd',
      'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    }
  };

  
  fetch('https://http-cors-proxy.p.rapidapi.com/https://generatorfun.com/consumeapi.php?api=39&apisecret=978c05-79094e-b07c06-d75f84-57ad6e', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      const saveDress = JSON.stringify(response)
      localStorage.setItem("saveDress", saveDress)
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
      'X-RapidAPI-Key': '0d8416f193msh56444f997718e79p1dd0e7jsn9fb1f5e138bd',
      'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    }
  };

  
  fetch('https://http-cors-proxy.p.rapidapi.com/https://generatorfun.com/consumeapi.php?api=2325&apisecret=944d63-8986a4-ed361f-a7c6a4-bf1f03', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      const saveJoke = JSON.stringify(response)
      localStorage.setItem("saveJoke", saveJoke)
      result2.innerText = response
    }) 
    .catch(err => console.error(err));
    
}

fetchDataBtn.addEventListener('click', getData2)


const getData3 = function() {
  result.innerText = 'Loading. . .'
  const options = {
    method: 'GET',
    headers: {
      origin: 'example.com',
      'x-requested-with': 'example.com',
      'X-RapidAPI-Key': '0d8416f193msh56444f997718e79p1dd0e7jsn9fb1f5e138bd',
      'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com'
    }
  };

  
  fetch('https://http-cors-proxy.p.rapidapi.com/https://generatorfun.com/consumeapi.php?api=16&apisecret=9643d9-9ccd5e-367577-5c01ee-af4a3c', options)

    .then(response => response.json())
    .then(response => {
      console.log(response)
      // Save response to local storage.
      const saveDate = JSON.stringify(response)
      localStorage.setItem("saveDate", saveDate)
      result3.innerText = response
    }) 
    .catch(err => console.error(err));
    
 
}
fetchDataBtn.addEventListener('click', getData3)


const save1 = localStorage.getItem("saveDress")
const save1Parse = JSON.parse(save1)
result.innerHTML = save1Parse

const save2 = localStorage.getItem("saveJoke")
const save2Parse = JSON.parse(save2)
result2.innerHTML = save2Parse

const save3 = localStorage.getItem("saveDate")
const save3Parse = JSON.parse(save3)
result3.innerHTML = save3Parse




////////////////
// allData has nested arrays // 2d array //for each loop
var idList = document.getElementById("savedatabutton");
var allData = [];

function save(){
  
  var result = [];
 
  
  var fieldValue = document.getElementById("result").innerText;
  result.push(fieldValue)
  var fieldValue2 = document.getElementById("result2").innerText;
  result.push(fieldValue2)
  var fieldValue3 = document.getElementById("result3").innerText;
  result.push(fieldValue3)
  
  allData.push(result);

  //allData.forEach (element => document.getElementById("savelist").innerHTML=element)
  document.getElementById("list").innerHTML=""
  for (i = 0; i<allData.length; i++){
    for (j = 0; j<3; j++){
     var newElement =  document.createElement("li")
      newElement.textContent = allData[i][j]
      document.getElementById("list").appendChild(newElement)
    }
  }
  console.log(allData)
}

idList.addEventListener('click', save)