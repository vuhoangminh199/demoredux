const initData= () => (
    fetch('http://192.168.1.106:1996/api/') //eslint-disable-line
    .then(res => res.json())
);

export default initData;
