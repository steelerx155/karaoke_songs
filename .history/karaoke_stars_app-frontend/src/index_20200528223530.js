const BACKEND_URL = 'http://localhost:3000/api/v1/songs';
fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));



const app = new App()




