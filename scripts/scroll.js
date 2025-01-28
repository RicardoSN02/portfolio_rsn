const sections = document.querySelectorAll('.yscroll');

let numSection = sections.length - 1;
let position = 0;
let reload = false;

scrollToSection(position);

function scrollToSection(target) {
  window.scrollTo({
    top: target,
    behavior: 'smooth',
  });
}

window.addEventListener('wheel', (event) => {
    event.preventDefault();
    
    if(reload === false){
    
        if (event.deltaY > 0 && position < numSection ) {
            position = position + 1;
        } else if (event.deltaY < 0 && position > 0) {
            position = position -1;
        }
    
        if(position <= numSection && position >= 0){
            scrollToSection(sections[position].offsetTop);
        }

        reload = true;

        setTimeout(() =>{
            reload = false;
        },120);
    }    
}, { passive: false});


let returnButton = document.getElementById("returnFooter");
let returnButton2 = document.getElementById("returnHeader");

returnButton.addEventListener('click', (event)=> {
    position = 0; 
})
returnButton2.addEventListener('click', (event)=> {
    position = 0; 
})