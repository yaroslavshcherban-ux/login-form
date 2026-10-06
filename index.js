const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;

    result.innerHTML = "<h3>Літери вашого імені:</h3>";

    for (let i = 0; i < name.length; i++) {
        result.innerHTML += `<span class="letter">${name[i]}</span>`;
    }
});