/* fetch(url)
        .then(response => response.json())
        .then(data => respuesta = data); */

let respuesta = 'Aún sin datos';

const peticion = async (moneda1, moneda2) => {

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${moneda1}/${moneda2}.json`

    const response = await fetch(url);
    const data = await response.json();
    console.log(`Un ${moneda1} vale ${data[moneda2]} ${moneda2}.`);
}

peticion("mxn", "jpy")