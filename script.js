const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');



open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});

const panels = document.querySelectorAll('.panel');

/*this panels const selects all items in our document 
with a panel class (all the pictures), and puts it
in a const variable for us to use!*/

panels.forEach(panel => {
panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    
    });  
});

/*we go into the panels const, use the forEach() 
method, which calls a function for EACH element in
an array (our array 'panels'). we call a function panel 
or whatever we want to call it, and the we want to
add an event listener for clickign on the item, which calls
a function that first removes all ACTIVE classes (see below), 
and then adds active class to the one that was clicked*/

function removeActiveClasses() {
    panels.forEach(panel => {
panel.classList.remove('active');
    });
};

