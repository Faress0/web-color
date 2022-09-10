let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let pos1 = Math.floor(Math.random() * 1024);
let pos2 = Math.floor(Math.random() * 728);

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


const box = document.getElementById('h2');
const tout = document.querySelector('.tout')
box.innerText = `rgb(${red}, ${green}, ${blue})`;


tout.style.left = pos1 + "px";
tout.style.top = pos2 +"px";
