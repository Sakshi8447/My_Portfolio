function sendMail(){
    let parms = {
        name : document.getElementById("name").value ,
        email : document.getElementById("email").value ,
        subject : document.getElementById("subject").value ,
        message : document.getElementById("message").value ,
    }

    emailjs.send("service_2ch9bfe", "template_vncrbfh", parms),then(alert("Email Sent!!"))
}