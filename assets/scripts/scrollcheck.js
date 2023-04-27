window.addEventListener("load", (e) => {
    var menu = document.getElementById('menu');
    menu.classList.add('transparent', 'bef');
});
window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    var menu = document.getElementById('menu');
    
    menu.classList.remove('bef');
    if(scroll > 75){
        menu.classList.remove('transparent');
        menu.classList.add('style');
    } else {
        menu.classList.add('transparent');
        menu.classList.remove('style');
    }
});