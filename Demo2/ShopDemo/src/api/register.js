const date  = new Date();
const address = 'submit address';
const status = false
const register = (name, email, password, tel) => (
    fetch('http://192.168.1.106:1996/api/CUSTOMERs/PostCUSTOMER', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ name, email, password, tel, address, date,status})
    })
        .then(res => res.text())
);

module.exports = register;
