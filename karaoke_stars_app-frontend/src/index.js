const BACKEND_URL = 'http://localhost:3000/api/v1';
fetch(`${BACKEND_URL}/songs`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));



const app = new App()

