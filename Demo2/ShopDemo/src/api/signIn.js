const signin = (email, password) => (
    fetch(`http://localhost/api/login/${email}/${password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
        .then(res => res.json())
);

module.exports = signin;
