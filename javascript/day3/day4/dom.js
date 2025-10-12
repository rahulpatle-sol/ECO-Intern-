// this tut is for dom  manu[palation]
const heading=document.querySelector('h1');


const button=document.querySelector('button');
button.addEventListener('click',function(){
    heading.style.color='red';
})
const ul=document.querySelector('ul');
const li=document.createElement('li');
const add=document.getElementById('addButton');
const remove=document.getElementById('removeButton');
add.addEventListener('click',function(){
    li.textContent='New Item';
    ul.appendChild(li);
})
remove.addEventListener('click',function(){
    ul.removeChild(li);
}
)

// const li=document.createElement('li');
// li.textContent='New Item';
// ul.appendChild(li);
// ul.removeChild(li);

// const heading=document.querySelector('h1');
// heading.textContent='Hello World';
// heading.innerHTML='<em>Hello World</em>';
// heading.style.color='blue';
// heading.classList.add('title');
// heading.classList.remove('title');
// heading.classList.toggle('title');
// console.log(heading.classList.contains('title'));
// console.log(heading.classList);
