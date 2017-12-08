const getBrand = () => (
    fetch('http://192.168.1.106:1996/api/BRANDs/GetBRANDs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
        .then(res => res.json())
);
module.exports = getBrand;