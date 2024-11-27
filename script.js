const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messages = document.getElementById('messages');

const socket = new WebSocket('wss://your-server-url');

socket.addEventListener('message', (event) => {
    const message = document.createElement('div');
    message.textContent = event.data;
    messages.appendChild(message);
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
});
