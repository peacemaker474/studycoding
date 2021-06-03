const h1 = document.querySelector('h1');


const superEventHandler = {
    handleMouseEnter : e => {
        h1.innerHTML = "The Mouse is here!!!"
        h1.style.color = "#16a085";
    },
    handleMouseLeave : e => {
        h1.innerHTML= "Mouse Leaves... 😰"
        h1.style.color = "blue";
    },
    handleResize : e => {
        h1.innerHTML = "The riszeddddddd";
        h1.style.color = "yellow";
    },
    handleMouseDown : e => {
        h1.innerHTML = "Mouse downs right button!!!"
        h1.style.color = "pink";
    }
}

h1.addEventListener('mouseenter', superEventHandler.handleMouseEnter);
h1.addEventListener('mouseleave', superEventHandler.handleMouseLeave);
window.addEventListener('resize', superEventHandler.handleResize);
window.addEventListener('auxclick', superEventHandler.handleMouseDown);