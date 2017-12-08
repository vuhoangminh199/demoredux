const getProductOfType = (id) => (
    fetch(`http://192.168.1.106:1996/api/PRODUCTs/GetProductOfType/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
    })
        .then(res => {
            console.log(res)
            return res._bodyText    
        })
);
module.exports = getProductOfType;