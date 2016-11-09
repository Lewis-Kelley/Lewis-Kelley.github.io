var my_heading = document.querySelector("h1");

function set_user_name() {
    alert("Hello");
    var my_name = prompt("Please enter your name.");
    localStorage.setItem("name", my_name);
    my_heading.textContent = "Different Title";
}

// document.querySelector("html").onclick = function() {
//     alert("Stop clicking on me!")
//}

if (!localStorage.getItem("name")) {
    set_user_name();
} else {
    var stored_name = localStorage.getItem("name");
    my_heading.textContent = "Your name is " + stored_name;
}

var my_button = document.query("button");
my_button.onclick = function () {
    set_user_name();
}
