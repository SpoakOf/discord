// Grab elements
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");

// Send message when clicking button
sendBtn.addEventListener("click", sendMessage);

// Send message when pressing Enter
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Function to create and display a message
function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  const username = "You";

  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  messageDiv.innerHTML = `
    <span class="username">${username}</span>
    <span class="timestamp">${timestamp}</span>
    <div class="text">${text}</div>
  `;

  chatMessages.appendChild(messageDiv);

  // Scroll to newest message
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Clear input
  messageInput.value = "";
}

// Fake starter messages
const starterMessages = [
  { user: "Alex", text: "Welcome to the server!" },
  { user: "Jordan", text: "This is a local Discord-style chat." },
  { user: "Taylor", text: "Works offline on Chromebook." }
];

starterMessages.forEach(msg => {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  messageDiv.innerHTML = `
    <span class="username">${msg.user}</span>
    <span class="timestamp">${timestamp}</span>
    <div class="text">${msg.text}</div>
  `;

  chatMessages.appendChild(messageDiv);
});
