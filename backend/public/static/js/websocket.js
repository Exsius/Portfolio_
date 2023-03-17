window.addEventListener('DOMContentLoaded', (event) => {

    var input = document.getElementById("input")
    var output = document.getElementById("output")
    var button = document.getElementById("send")
    var socket = new WebSocket("ws://localhost:3000/echo")

    socket.onopen = function () {
        output.innerHTML += "Status: Connected\n";
    };

    socket.onmessage = function (e) {
        output.innerHTML += "Server: " + e.data + "\n";
    };

    button.addEventListener("click", function() {
        socket.send(input.value);
        input.value = "";
    })

})