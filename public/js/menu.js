const menuImg = document.getElementById('menuImg');
const crossImg = document.getElementById('crossImg');
const menuItem = document.getElementById('mobileMenu');
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
