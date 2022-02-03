// console.log('sanity check');
const inputBox = document.getElementById('input-box');
const submitBtn = document.getElementById('submit-button');
const toDo = document.getElementById('todo-list');

submitBtn.addEventListener('click', function(){
  const newLi = document.createElement('li');
  newLi.textContent = inputBox.value;
  if(inputBox.value !== ""){
    toDo.appendChild(newLi);
    inputBox.value= '';
  }
})