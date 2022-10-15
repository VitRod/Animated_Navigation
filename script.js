const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItms = [nav1,nav2,nav3,nav4,nav5];


// nav animation 
function navAnimate(dir1,dir2) {
    let i = 0;
    navItms.forEach((nav, i) => {
      i++;
      nav.classList.replace(`slide-${dir1}-${i}`, `slide-${dir2}-${i}`);
    });
  }



















