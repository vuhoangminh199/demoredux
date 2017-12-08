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
    fetch(`http://192.168.1.106:1996/api/CUSTOMERs/login/${email}/${password}`,
    {   
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
    .then(res => res.json())
);

module.exports = signin;
