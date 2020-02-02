
//change the header height, based on howmuch the user has scrolled
window.onscroll = (e) =>{
    let scrollDistance = window.scrollY;
    const header = document.querySelector('header');
    const instaLogo = document.querySelector('.instagramLogo')
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.main_container');
    const mediaQuery = window.matchMedia( "(min-width: 1000px)" );

    if(scrollDistance >= 100){
      
      header.style.height = '52px';
      instaLogo.style.opacity = '0';
      sidebar.classList.add('fixed');

        if(mediaQuery.matches){
          container.classList.add('fixed');
        } else {
          container.classList.remove('fixed');
      }

    }else{
      header.style.height = '77px';
      instaLogo.style.opacity = '1';
      sidebar.classList.remove('fixed');

    }
  }
  
  
  
  