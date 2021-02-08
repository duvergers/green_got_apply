const fetch = require('node-fetch');

const baseUrl = 'http://localhost:3000/api/'

const getData = async (endpoint, data) => { 

    try{

        const response = await fetch(baseUrl + endpoint, data);
        return response;
    } catch(error){
        return error;
    }
}


module.exports = getData;