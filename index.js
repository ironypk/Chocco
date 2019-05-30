console.log ("Привет");


//////////////FIXED- NAVBAR


//Нажатие на бургер
let fixedNavbar =  document.querySelector('.fixed-navbar')
let hamburger = document.querySelector('.hamburger-menu-link');

hamburger.addEventListener('click', function(e){
    e.preventDefault();
    fixedNavbar.style.display = "block";
    document.body.classList.add('locked');
});


//Нажатие на бургер close and esc

let menuClose = document.querySelector('.menu-fixed__close');

menuClose.addEventListener('click', function(){
    fixedNavbar.style.display = "none";
    document.body.classList.remove('locked');
});

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        fixedNavbar.style.display = "none";
        document.body.classList.remove('locked');
    }
});


//Нажатие на ссылки nav-fixed

let fixedNavbarItem = document.querySelectorAll('.fixed-navbar__item'),
fixedNavbarItemLength = fixedNavbarItem.length;

for(let i = 0; i < fixedNavbarItemLength; i++){
    fixedNavbarItem[i].addEventListener('click', function(e){
        fixedNavbar.style.display = "none";
        document.body.classList.remove('locked');   
});
}

//////////////////////////TEAM 

    teamItemName = document.querySelectorAll('.name'),
    teamItemNameLength = teamItemName.length;


for( let i=0; i<teamItemNameLength; i ++){
    teamItemName[i].addEventListener('click',function(){
        if (teamItemName[i].parentNode.classList.contains('team__item--active')){
                        teamItemName[i].parentNode.classList.remove('team__item--active')
                    } else{
                        teamItemName[i].parentNode.classList.add('team__item--active')
                    } 
    });
}


/////////// menu accordion


let menuItemLink = document.querySelectorAll('.menu__block'),
    menuItemLinkLength = menuItemLink.length;
let menuItem = document.querySelectorAll('.menu__item'),
    menuItemLength = menuItem.length;
let menuItemClose = document.querySelectorAll('.menu__accordion-close'),
    menuItemCloseLength = menuItemClose.length;

function menuActiveDelete(){ for (let i = 0; i < menuItemLength; ++i){
    menuItem[i].classList.remove('menu__item--active');
}
}

    for( let i=0; i<menuItemLinkLength; i ++){
        menuItemLink [i].addEventListener('click',function(){
            if (menuItemLink [i].parentNode.classList.contains('menu__item--active')){
                menuItemLink [i].parentNode.classList.remove('menu__item--active')
                        } else{
                            menuActiveDelete()
                            menuItemLink [i].parentNode.classList.add('menu__item--active')
                        } 
        });
    }


    for(let i = 0; i< menuItemCloseLength;i++){
        menuItemClose[i].addEventListener('click', function(){
            menuActiveDelete()
        });
    }
    