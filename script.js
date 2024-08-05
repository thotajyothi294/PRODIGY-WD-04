// Add event listener to submit button
document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // Send form data to server (replace with your server URL)
    fetch('(link unavailable)', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
