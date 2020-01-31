
//change the header height, based on howmuch the user has scrolled
window.onscroll = (e) =>{
    let scrollDistance = window.scrollY;
    const header = document.querySelector('header');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.main_container');

    if(scrollDistance >= 100){
        // console.log('in')
        // console.log(profile)
      header.style.height = '52px';
      sidebar.classList.add('fixed');
      container.classList.add('fixed');
    }else{
      header.style.height = '77px';
      sidebar.classList.remove('fixed');
      container.classList.remove('fixed');


    }
  }
  
  
  
  