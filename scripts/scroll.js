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
    if(reload === false){
    
        if (event.deltaY > 0 && position < numSection ) {
            position = position + 1;
        } else if (event.deltaY < 0 && position > 0) {
            position = position -1;
        }
    
        if(position <= numSection && position >= 0){
            scrollToSection(sections[position].offsetTop);
        }
        console.log(position);
        reload = true;

        setTimeout(() =>{
            reload = false;
        },120);
    }    
});
