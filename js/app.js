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

    var width = window.innerWidth;

    //gallery slider//

    var leftBtn = document.getElementById('left-btn');
    var rightBtn = document.getElementById('right-btn');
    var galleryElements = document.getElementsByClassName('gallery__photo');

    var galleryBox = document.getElementById('gallery-content');
    var galleryPhoto = document.getElementById('gallery-photo');
    var arrows = document.getElementById('gallery-arrows');

    galleryBox.scrollLeft = ((galleryBox.offsetWidth - galleryPhoto.offsetWidth) /2);

    var centeredPhoto = (galleryBox.offsetWidth - galleryPhoto.offsetWidth)/2;

    console.log(centeredPhoto);
    console.log(galleryBox.offsetWidth);


    var offset = galleryPhoto.offsetWidth;
    console.log(offset);

        leftBtn.addEventListener('click', function(){

            galleryBox.scrollLeft += offset;
            centeredPhoto += offset;
            console.log(centeredPhoto);
            // listElements[indexOfPicture].classList.remove('gallery__photo--visible');
            // indexOfPicture --;
            // if(indexOfPicture < 0) {
            //     indexOfPicture = listElements.length -1;
            // }
            // listElements[indexOfPicture].classList.add('gallery__photo--visible');
        });


        rightBtn.addEventListener('click', function(){

            galleryBox.scrollLeft = -(offset*2);
            centeredPhoto -= offset*2;
            console.log(centeredPhoto);

            // listElements[indexOfPicture].classList.remove('gallery__photo--visible');
            // indexOfPicture ++;
            // if(indexOfPicture > listElements.length -1) {
            //     indexOfPicture = 0;
            // }
            // listElements[indexOfPicture].classList.add('gallery__photo--visible');
        });


    // if(width > 767) {
    //
    //     var indexOfPhoto = 1;
    //     listElements[indexOfPhoto].classList.add('gallery__photo--visible');
    //     leftBtn.addEventListener('click', function(){
    //         listElements[indexOfPicture].classList.remove('gallery__photo--visible');
    //         indexOfPicture --;
    //         if(indexOfPicture < 0) {
    //             indexOfPicture = listElements.length -1;
    //         }
    //         listElements[indexOfPicture].classList.add('gallery__photo--visible');
    //     });
    //     rightBtn.addEventListener('click', function(){
    //         listElements[indexOfPicture].classList.remove('gallery__photo--visible');
    //         indexOfPicture ++;
    //         if(indexOfPicture > listElements.length -1) {
    //             indexOfPicture = 0;
    //         }
    //         listElements[indexOfPicture].classList.add('gallery__photo--visible');
    //     });
    // }

});
