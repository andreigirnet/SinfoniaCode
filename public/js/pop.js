const popUp = document.getElementById('popUp');
const closePop = document.getElementById('closePop');

closePop.addEventListener('click',()=>{
    popUp.style.display = 'none';
})
 function openPopUp(){
    popUp.style.display = 'block';
 }
