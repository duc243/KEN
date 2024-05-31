//turn pages when click next or prev button
const pagesTurnBtn = document.querySelectorAll('.nextprev-btn');
pagesTurnBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
        const pageTurnId = element.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
        } else {
            pageTurn.classList.add('turn');            
        }
    });
});

//contact me button when click

//create reverse index function

//back profile button when click

//opening animation
//opening animation (cover right animation)
//opening animation (page left or profile page animation)
//opening animation (all page right animation)