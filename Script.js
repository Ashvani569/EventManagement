let form = document.getElementById("form");
let userList = document.getElementById("userList");

let users = JSON.parse(localStorage.getItem("users")) || [];

// 🔥 Prevent past date selection
document.getElementById("date").min = new Date().toISOString().split("T")[0];

// Show selected event
function registerEvent(eventName) {
  document.getElementById("event").value = eventName;
}

// Display users
function displayUsers() {
  userList.innerHTML = "";
  users.forEach(user => {
    let li = document.createElement("li");

    // 🔥 Date bhi show hoga
    li.innerText = `${user.name} - ${user.event} (${user.date})`;

    userList.appendChild(li);
  });
}

// Form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let event = document.getElementById("event").value;

  // 🔥 New date input
  let date = document.getElementById("date").value;

  let user = { name, email, event, date };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  displayUsers();
  form.reset();
});

// Initial display
displayUsers();