// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly

function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese=document.getElementById("cheese");
  if(state.Cheese){
    cheese.style.display="inherit";
  }
  else{
    cheese.style.display="none";
  }
}
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM




function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes =document.getElementById("tomato");
  if(state.Tomatoes){
    tomatoes.style.display="inherit";
  }
  else{
    tomatoes.style.display="none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions =document.getElementById("onion");
  if(state.Onions){
    onions.style.display="inherit";
  }
  else{
    onions.style.display="none";
  }
}

function renderLettuce() {
  let lettuce =document.getElementById("lettuce");
  if(state.Lettuce){
    lettuce.style.display="inherit";
  }
  else{
    lettuce.style.display="none";
  }
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick= function () {
  // console.log("da")
 state.Cheese= !state.Cheese;
 renderAll(); 
};

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick= function () {
  
 state.Tomatoes= !state.Tomatoes;
 
//  if(state.Tomatoes){
//   document.querySelector(".btn-tomatoes").classList.add("active")
//  }
//  else{console.log("jkll")
//  document.querySelector(".btn-tomatoes").classList.remove("active")}
 renderAll(); 
};
// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick= function () {
  
  state.Onions= !state.Onions;
  renderAll(); 
 };

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick= function () {
  
  state.Lettuce= !state.Lettuce;
  renderAll(); 
  
 };

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderButtons(){
  if(state.Tomatoes){
    document.querySelector(".btn-tomatoes").classList.add("active")
   }
   else{console.log("jkll")
   document.querySelector(".btn-tomatoes").classList.remove("active")
  }
   if(state.Cheese){
    document.querySelector(".btn-cheese").classList.add("active")
   }
   else{
   document.querySelector(".btn-cheese").classList.remove("active")}
   if(state.Lettuce){
    document.querySelector(".btn-lettuce").classList.add("active")
   }
   else{
   document.querySelector(".btn-lettuce").classList.remove("active")}
   if(state.Onions){
    document.querySelector(".btn-onions").classList.add("active")
   }
   else{
   document.querySelector(".btn-onions").classList.remove("active")}
   if(state.Patty){
    document.querySelector(".btn-patty").classList.add("active")
   }
   else{
   document.querySelector(".btn-patty").classList.remove("active")}
  };
// document.querySelector(".btn-tomatoes").onclick= function () {
  
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard (){
  if(state.Tomatoes){
    document.querySelector(".items-t").style.display="inherit"
   }
   else{
   document.querySelector(".items-t").style.display="none"
  }
  if(state.Patty){
    document.querySelector(".items-p").style.display="inherit"
   }
   else{
   document.querySelector(".items-p").style.display="none"
  }
  if(state.Onions){
    document.querySelector(".items-o").style.display="inherit"
   }
   else{
   document.querySelector(".items-o").style.display="none"
  }
  if(state.Lettuce){
    document.querySelector(".items-l").style.display="inherit"
   }
   else{
   document.querySelector(".items-l").style.display="none"
  }
  if(state.Cheese){
    document.querySelector(".items-c").style.display="inherit"
   }
   else{
   document.querySelector(".items-c").style.display="none"
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  var sum=0;
  if(state.Tomatoes){
    sum+=ingredients.Tomatoes;
  }
  if(state.Cheese){
    sum+=ingredients.Cheese;
  }
  if(state.Lettuce){
    sum+=ingredients.Lettuce;
  }
  if(state.Onions){
    sum+=ingredients.Onions;
  }
  if(state.Patty){
    sum+=ingredients.Patty;
  }
  console.log(sum)
  document.querySelector(".price-details").innerText="Rs"+sum
}
