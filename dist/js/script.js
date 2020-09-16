let button = document.querySelector('.myButton');
let input = document.querySelector('input');
let block = document.querySelector('.block');
let elem = document.querySelector(".newElem");
let count = 0;
function createElem(text) {

let newELem = document.createElement('p');
let checkBox = document.createElement("input");
checkBox.setAttribute('type','checkbox');
newELem.textContent = text;
newELem.className = "newElem";
block.appendChild(newELem);
newELem.appendChild(checkBox);
input.value = "";
    newELem.setAttribute('id', count)


}

button.addEventListener('click', function (e) {
    e.preventDefault();
    if(input.value!=''){
        createElem(input.value);
        console.log(input.value);
    }
    count++;

})

input.addEventListener( 'click', function(e){
    e.preventDefault();
    input.value = "";
})

block.addEventListener('dblclick', function (e) {
    e.preventDefault();
    console.log(e.target.id);
    document.getElementById(e.target.id).remove();
})



