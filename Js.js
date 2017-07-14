var box = document.querySelector('div#box');


box.insertAdjacentHTML("afterbegin", 
`<p class='red'> Welcome to life chat <p>`);

var button = document.querySelector('button');
var inputbox = document.querySelector('input')

button.addEventListener( 'click', function() {
    console.log(inputbox.value)

    box.insertAdjacentHTML("beforeend", "<p>" + inputbox.value + "</p>");

    // scroll to functionality

    mascotFeedback();
})

function mascotFeedback(){
    

    setTimeout(function() { 
        box.insertAdjacentHTML( "beforeend", `<p class='orange'> I'm ${mascot.name} </p>`);
    }, 3000)

}


var mascot = {
    name: "reverseFlash",
    age: 26

}
