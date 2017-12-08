const topproduct = () => (
    fetch('http://192.168.1.106:1996/api/PRODUCTs/GetTOPPRODUCTs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
        .then(res => res.json())
);
module.exports = topproduct;