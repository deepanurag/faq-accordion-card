const clickArea = document.querySelectorAll('.texts');




//event listeners
for(var i=0; i<clickArea.length; i++){
    clickArea[i].addEventListener('click', main);
};




//functions


function main(e){
    //making visible
    var classList = e.target.children[3].classList;
    classList.toggle('invisible-made-visible');
    

    //making text bold
    var something = e.target.children[0].classList;
    something.toggle('bold');
    console.log(e.target.children);


    //rotating arrow
    var somethingelse = e.target.children[1].classList;
    somethingelse.toggle('uparrow');
    console.log(e.target.children);
}