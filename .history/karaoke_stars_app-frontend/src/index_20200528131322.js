console.log("testing...")

const BACKEND_URL = 'http://localhost:3000';
fetch(`${git@github.com:steelerx155/karaoke_stars_app.git}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));