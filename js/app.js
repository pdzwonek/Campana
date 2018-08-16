var humburger = document.getElementById('humburger');

humburger.addEventListener('click', function() {
    //humburger animation//

    var humburgerItem = document.getElementsByClassName('mobile__item');

    for(i=0; i<humburgerItem.length; i++){
        humburgerItem[i].classList.toggle('mobile__item--change');
    }

    //menu animation//

    var visibilityOfMenu = document.getElementById('menu');

    visibilityOfMenu.classList.toggle('nav--unvisible');

});

document.addEventListener('DOMContentLoaded', function(){

    //gallery slider//

    var leftBtn = document.getElementById('left-btn');
    var rightBtn = document.getElementById('right-btn');
    var listElements = document.getElementsByClassName('gallery__photo');

    console.log(listElements);

    var indexOfPicture = 0;
    listElements[indexOfPicture].classList.add('gallery__photo--visible');

    leftBtn.addEventListener('click', function(){
        listElements[indexOfPicture].classList.remove('gallery__photo--visible');
        indexOfPicture --;
        if(indexOfPicture < 0) {
            indexOfPicture = listElements.length -1;
        }
        listElements[indexOfPicture].classList.add('gallery__photo--visible');
    });
    rightBtn.addEventListener('click', function(){
        listElements[indexOfPicture].classList.remove('gallery__photo--visible');
        indexOfPicture ++;
        if(indexOfPicture > listElements.length -1) {
            indexOfPicture = 0;
        }
        listElements[indexOfPicture].classList.add('gallery__photo--visible');
    });

});
