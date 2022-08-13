// ttad

// create variable to store user selection
let selectedRate = 0;

// users selected number updates selectedRate variable
function selectRate(n) {
  selectedRate = n;
  document.querySelector('.number').style.backgroundColor = 'red';
}

// number gets shaded


// user hits submit
// selected input gets put into span element
function submitBtn() {

  const elmnt = document.querySelector(".indexWrap"); elmnt.remove();


  const newDiv = document.createElement("div");

  var element = document.getElementById("myDIV");
  element.classList.add("mystyle");

  var img = document.createElement('img');
  img.src = '/assets/img/illustration-thank-you.svg';
  document.querySelector('.rateWrapper').appendChild(img);



  // const para = document.createElement("h1");
  // const node = document.createTextNode("This is new.");
  // const para = document.createElement("p");
  // const node = document.createTextNode("This is new.");
  // para.appendChild(node);
  // const element = document.getElementById("rateWrapper");
  // element.appendChild(para);


  // document.querySelector('span').innerHTML = selectedRate;
}



function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
