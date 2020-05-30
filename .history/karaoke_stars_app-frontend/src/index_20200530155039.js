const BACKEND_URL = 'http://localhost:3000api/v1/';
fetch(`${BACKEND_URL}/song`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));



const app = new App()




