function showRegWindow (state){
    document.querySelector('.header__reg').style.display = state;
    document.querySelector('.header__layer').style.display = state;
    document.querySelector('.header__login').style.display = 'none';
        
}

function showLoginWindow (state){
    document.querySelector('.header__login').style.display = state;
    document.querySelector('.header__layer').style.display = state;
}