
      const navItems= document.querySelector(".nav_items");
      const openNavBtn= document.querySelector("#open_nav-btn");
      const closeNavBtn= document.querySelector("#close_nav-btn");

       const openNav=() =>{
    navItems.style.display="grid";
    openNavBtn.style.display="none";
         closeNavBtn.style.display="flex"
}
      const closeNav=() =>{
    navItems.style.display="none";
        openNavBtn.style.display="flex";
    closeNavBtn.style.display="none";
}
      

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

      