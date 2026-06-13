// NAVIGATION BAR TOGGLER
let bars = document.getElementById('bars');
let closes = document.getElementById('close');

bars.addEventListener('click', ()=>{
	closes.style.display = 'block';
	bars.style.display = 'none';
});

closes.addEventListener('click', ()=>{
	closes.style.display = 'none';
	bars.style.display = 'block';
});