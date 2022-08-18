
/* Hamburger Menu */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n =>n.addEventListener('click', ()=> {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))


/* Footer Time */
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('clock-time').innerHTML = t_str;
}
setInterval(updateTime, 1000);



/* Cursor */
new kursor({
    type: 1,
    removeDefaultCursor: true,
    color: '#6B7280'
})


/* Image Hover Projects */

let links = document.querySelectorAll('.menu-item');
let linkImages = document.querySelectorAll('.hover-reveal__img');

links.forEach((link, idx) => {
    link.addEventListener('mousemove', (e) => {
        link.children[1].style.opacity = 1;
        link.children[0].style.zIndex = 3;
        link.children[1].style.transform = `translate(${e.clientX - 300}px, -${e.clientY / 3}px) rotate(${e.clientX / 20}deg)`
        linkImages[idx].style.transform = 'scale(1, 1)'
    })

    link.addEventListener('mouseleave', (e) => {
        link.children[1].style.opacity = 0;
    })
    
})

/* Dark mode */

var icon = document.querySelector('.darkmode-toggle')
const btn = document.getElementById('btn');


icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
}
btn.addEventListener('click', function handleClick() {
    const initialText = "DON'T TOUCH ME";
  
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      btn.textContent = "GREAT JOB!";
    } else {
      btn.textContent = initialText;
    }
  });


  /* Locomotive */ 
