var humburger = document.getElementById('humburger');
console.log(humburger);


humburger.addEventListener('click', function() {
    var visibilityOfMenu = document.getElementById('menu');
    visibilityOfMenu.classList.toggle('nav--unvisible');
});
