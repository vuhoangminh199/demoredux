const searchProduct = (key) => {
    const url = `http://192.168.1.106:1996/api/PRODUCTs/SearchProduct/${key}`;
    return  fetch(url)
        .then(res => res.json());
};

export default searchProduct;
