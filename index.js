let card = document.querySelector(".education");
let card1 = document.querySelector(".skiee");


let mainText = document.querySelector(".main");
let about1 = document.querySelector(".about");
let project1 = document.querySelector(".trend1");
let project3 = document.getElementById("project2");
let contact1 = document.querySelector(".contact");

function homes(){
    mainText.style.display="flex";
    card.style.display="block";
    card1.style.display="block";
    about1.style.display="none";
    project1.style.display="none";
    project3.style.display="none";
    contact1.style.display="none";


document.getElementById("home").style.color="#11a372";
document.getElementById("education").style.color="white";
document.getElementById("about").style.color="white";
document.getElementById("projects").style.color="white";
document.getElementById("contact").style.color="white";


}


function educations(){
       mainText.style.display="none";
       card.style.display="block";
       card1.style.display="block";
       about1.style.display="none";
       project1.style.display="none";
       project3.style.display="none";
       contact1.style.display="none";


document.getElementById("home").style.color="white";
document.getElementById("education").style.color="#11a372";
document.getElementById("about").style.color="white";
document.getElementById("projects").style.color="white";
document.getElementById("contact").style.color="white";

    }

function abouts(){
    mainText.style.display="none";
    card.style.display="none";
    card1.style.display="none";
    about1.style.display="block";
    project1.style.display="none";
    project3.style.display="none";
    contact1.style.display="none";

document.getElementById("home").style.color="white";
document.getElementById("education").style.color="white";
document.getElementById("about").style.color="#11a372";
document.getElementById("projects").style.color="white";
document.getElementById("contact").style.color="white";

}

function project(){
    mainText.style.display="none";
    card.style.display="none";
    card1.style.display="none";
    about1.style.display="none";
    project1.style.display="block";
    project3.style.display="block";
    contact1.style.display="none";


document.getElementById("home").style.color="white";
document.getElementById("education").style.color="white";
document.getElementById("about").style.color="white";
document.getElementById("projects").style.color="#11a372";
document.getElementById("contact").style.color="white";


}

function contacts(){
    mainText.style.display="none";
    card.style.display="none";
    card1.style.display="none";
    about1.style.display="none";
    project1.style.display="none";
    project3.style.display="none";
    contact1.style.display="block";


    document.getElementById("home").style.color="white";
    document.getElementById("education").style.color="white";
    document.getElementById("about").style.color="white";
    document.getElementById("projects").style.color="white";
    document.getElementById("contact").style.color="#11a372";
    

}