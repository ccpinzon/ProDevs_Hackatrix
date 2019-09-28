
'use strict';
let fs = require('fs');
// [START functions_helloworld_http]
const escapeHtml = require('escape-html');

let jsonObject = JSON.parse(fs.readFileSync('jsonUser.json', 'utf8'));

// [END functions_helloworld_http]

// [START functions_helloworld_get]

function  getJsonOriginal(){
    return JSON.parse(fs.readFileSync('jsonUser.json', 'utf8'));
}

async function calculateValueTotal(jsonObject) {

    let min = 20000;
    let max = 180000;
    let value = Math.round(Math.random() * (max - min));
    let discount = 10000;
    jsonObject.discount = Math.round(Math.random() * (max - min));
    jsonObject.invoiceValue = value - discount;
    jsonObject.distanceValue = (value - discount) / 9;
    return jsonObject;
}

function getData(jsonData,dataObj){

    return {"data": jsonData[dataObj.toString()]}
}

exports.dataEscoltApp = async (req, res) => {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    let data = req.query.data;
    console.log("data -> " + data);
    // si se requiere algun tipo de info especifico
    if (data === "all") {
        data = undefined;
        jsonObject = getJsonOriginal();
    }

    if (data !== undefined) {
        jsonObject = getJsonOriginal();

        jsonObject = getData(jsonObject, data)
    }
    if (data === "summary") {
        await calculateValueTotal(jsonObject);
    }
    res.send(jsonObject);
};


// [END functions_helloworld_get]
