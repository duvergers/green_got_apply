const assert = require('assert')
const getData = require('../call_api.js')

describe('API route tests', () => {


  it('Test with a wrong method on greetings route', async () => {
    const data = {
      method: 'FABIEN'
  }
    const expected = 400;
    const response = await getData('greetings', data);

    assert.ok(response.status === expected);
  });    
  




  it('Test GET method greetings route without parameter', async () => {
    const data = {
      method: 'GET'
    }
    const expected = 402;
    const response = await getData('greetings', data);

    assert.ok(response.status === expected);
  });






  it('Test GET method greetings route with a parameter', async () => {
    const data = {
      method: 'GET'
    }
    const expected = 'Hello fabien';
    
    const response = await getData('greetings/fabien', data);
    const jsonResponse = await response.json();

    assert.ok(jsonResponse.name === expected);
  });






  it('Test POST method create_user with letters', async () => {
    const data = {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({
          firstName: 'fabien',
          lastName: 'greengot'
      })
    };
    const expected_first_name = 'FABIEN';
    const expected_last_name = 'GREENGOT';
    
    const response = await getData('create_user', data);
    const jsonResponse = await response.json();

    assert.ok(jsonResponse['Uppercased firstName'] === expected_first_name && jsonResponse['Uppercased lastName'] === expected_last_name);
  });






  it('Test POST method create_user with some numbers or special caracters', async () => {
    const data = {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({
          firstName: 'f@bien',
          lastName: 'greengot'
      })
    };
    const expected = 401;
    const response = await getData('create_user', data);

    assert.ok(response.status === expected);
  });



  it('Test a non existing route ', async () => {
    const data = {
      method: 'GET',
    };
    const expected = 404;
    const response = await getData('fabien', data);

    assert.ok(response.status === expected);
  });  

  // and so more tests to run...
  // like...
  // add a third name, fourth name and so on...
  // any combination about a special character in the first, last, third name
});