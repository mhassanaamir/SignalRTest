"use estrict"

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

document.getElementById("sendButton").disabled = true;
document.getElementById("lock").disabled = true;

connection.on("RecieveMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${user} says ${message}`
})

connection.on("Lock", function (user, message) {
    if (user == "admin") {
        document.getElementById("showHide").innerHTML = message.toString();
    }
    
})


connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
    document.getElementById("lock").disabled = false;
}).catch(function (err) { return console.error(err.toString) })

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value
    var message = document.getElementById("messageInput").value
    connection.invoke("SendMessage", user, message).catch(function (err) { return console.error(err.toString()) })

    event.preventDefault();
})

document.getElementById("lock").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value
    var message  = document.getElementById("messageInput").value
    connection.invoke("LockMessage",user, message).catch(function (err) { return console.error(err.toString()) })
   
    event.preventDefault();
})