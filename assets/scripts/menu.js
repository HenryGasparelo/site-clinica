window.addEventListener("load", (e) => {
    var menu = document.getElementById('menu');
    var btn = document.getElementById('homeicon');
    var cMenu = menu.classList;
    btn.addEventListener("click", (e) => {
        if(cMenu.contains('opened') || (!cMenu.contains('opened') && !cMenu.contains('closed'))){
            cMenu.remove('opened');
            cMenu.add('closed');
        } else {
            cMenu.add('opened');
            cMenu.remove('closed');
        }
    });
    btn.click();
});