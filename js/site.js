function displayMessage() {
    let msg = document.getElementById('message').value;

    Swal.fire(
        {
            backdrop: false,
            title: 'Yo-Ho',
            text: msg
        }
    );
}