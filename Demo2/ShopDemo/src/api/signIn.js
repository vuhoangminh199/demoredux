// const signin = (email, password) => (
//     fetch(`http://localhost/api/login/${email}/${password}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json'
//         },
//     })
//         .then(res => res.json())
// );
const signin = (email, password) => (
    fetch('http://localhost/api/login.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
);

module.exports = signin;
