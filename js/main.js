let container = document.getElementById('container');
let list_div = document.getElementById('list_div');
let screen = document.getElementById('screen');//input screen
let listDisplay = document.getElementById('list'); //ordred list
let btn = document.getElementById('btn');// add button
let delBtn = document.getElementById('delBtn');

let fulLi = [];

function addToForm(){
  let li =[]
  if(screen.value !== ''){
    li.push(`<li id="items">${screen.value}</li>`);  
    listDisplay.innerHTML += li;
    screen.value = '';
  }
  fulLi = [...li]
}

function delFromForm(arr, value){
  let delLi = arr.indexOf(value)
  if(delLi > -1){
    arr.splice(delLi, 1)
  }
 return listDisplay.innerHTML = arr
}

btn.addEventListener('click', addToForm)
// delBtn.addEventListener('click', delFromForm(fulLi, screen.value))