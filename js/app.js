var humburger = document.getElementById('humburger');

humburger.addEventListener('click', function() {
    //humburger animation//

    var humburgerItem = document.getElementsByClassName('mobile__item');

    for(i=0; i<humburgerItem.length; i++){
        humburgerItem[i].classList.toggle('mobile--change');
    }

    //menu animation//

    var visibilityOfMenu = document.getElementById('menu');

    visibilityOfMenu.classList.toggle('nav--unvisible');

});
