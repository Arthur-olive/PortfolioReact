function sendMsg(event) {
    event.preventDefault();

    const yourName = document.getElementById("name").value;
    const yourMessage = document.getElementById("message").value;
    const myNumber = "5596984029858";

    const text = `Olá! Me chamo ${yourName}, ${yourMessage}`;
    const msgFormat = encodeURIComponent(text);

    const url = `https://wa.me/${myNumber}?text=${msgFormat}`;

    window.open(url, "_blank");
}
