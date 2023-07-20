function sendemail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anandayush@865gmail.com",
        Password : "Ayushanand93@",
        To : 'ayushanand13388@gmail.com',
        From : document.getElementById("mail").value,
        Subject : "new message",
        Body : "Name:-" + document.getElementById("name").value + "<br> Email:-"+document.getElementById("mail").value
              +" <br>message:-" +document.getElementById("feedback").value + "<br> phone:-" +document.getElementById("phone").value
    }).then(
      message => alert("thank you")
    );
}