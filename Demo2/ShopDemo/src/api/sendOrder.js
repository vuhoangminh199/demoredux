
const sendOrder = (token, arrDetail) => (
    fetch('http://localhost/api/cart.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token, arrDetail })
    })
        .then(res => res.text())
);

module.exports = sendOrder;
