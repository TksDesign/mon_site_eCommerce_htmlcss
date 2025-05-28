//copy nu for mobile

function copyMenu() {
    //copy inside .dpt-cat to .depatements
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departements');
    dptPlace.innerHTML=dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML=mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML=topNav.innerHTML;
}
copyMenu()

// show stb menu on mobile

// const submenu = document.querySelectorAll('.has-child .icon-small');
// submenu.forEach((menu) => menu.addEventListener('click', toggle));
// function toggle(e) {
//     e.preventDefault();
//     submenu.forEach((item)=> item != this ? item.closest('.has-child ').classList.remove('expand'): null);
//     if (this.closest('.has-child ').classList !='expand');
//     this.closest('.has-child').classList.toggle('expand')
// }
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', function(e) {
    toggle.call(this, e);
}));

function toggle(e) {
    e.preventDefault();

    // Fermer tous les autres sous-menus
    submenu.forEach((item) => {
        const parent = item.closest('.has-child');
        if (item !== this) {
            parent.classList.remove('expand');
        }
    });

    // Bascule la classe 'expand' sur l'élément cliqué
    const hasChild = this.closest('.has-child');
    hasChild.classList.toggle('expand');
}