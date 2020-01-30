
//change the header height, based on howmuch the user has scrolled
window.onscroll = (e) =>{
  let scrollDistance = window.scrollY;
  let header = document.querySelector('header');
  if(scrollDistance >= 100){
    header.style.height = '52px';
  }else{
    header.style.height = '77px';
  }
}



