function showGreeting() {
    let message = document.getElementById("greetingMessage").value;
    if (message.trim() === "") {
        alert("Please write a message!");
        return;
    }
    document.getElementById("displayGreeting").innerHTML = 
        `<p class="greeting">🎊 ${message} 🎊</p>`;
}