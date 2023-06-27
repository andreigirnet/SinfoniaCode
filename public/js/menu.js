const menuImg = document.getElementById('menuImg');
const crossImg = document.getElementById('crossImg');
const menuItem = document.getElementById('mobileMenu');
const linkButtons = document.getElementsByClassName('mobNavButton');
let showMenu = false
menuImg.addEventListener('click', ()=>{
    if (showMenu === true){
      showMenu = false;
      menuItem.style.display = 'none';
      crossImg.style.display = 'none';
      menuImg.style.display ='block';
    }else{
        showMenu = true;
        menuItem.style.display = 'flex';
        menuImg.style.display = 'none';
        crossImg.style.display = 'block';
    }
})

crossImg.addEventListener('click', ()=>{
    if (showMenu === true){
        showMenu = false;
        menuItem.style.display = 'none';
        crossImg.style.display = 'none';
        menuImg.style.display ='block';
    }else{
        showMenu = true;
        menuItem.style.display = 'flex';
        menuImg.style.display = 'none'
        crossImg.style.display = 'block';
    }
})

for (let i = 0; i < linkButtons.length; i++) {
    linkButtons[i].addEventListener('click', ()=>{
        showMenu = false;
        menuItem.style.display = 'none';
        crossImg.style.display = 'none';
        menuImg.style.display ='block';
    });
}
