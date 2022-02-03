// console.log('sanity check');
const inputBox = document.getElementById('input-box');
const submitBtn = document.getElementById('submit-button');
const toDo = document.getElementById('todo-list');
const resetBtn = document.getElementById("reset-button");

//add to dos
submitBtn.addEventListener('click', function(){
  const newLi = document.createElement('li');
  newLi.textContent = inputBox.value;
  if(inputBox.value !== ""){
    toDo.appendChild(newLi);
    inputBox.value= '';
  }
})

//reset
resetBtn.addEventListener('click', function(){
  toDo.innerHTML = '';
  inputBox.value = '';
})

//Delete item on click
toDo.addEventListener('click', handleClick)

function handleClick(evt){
  evt.target.parentNode.removeChild(evt.target)
}