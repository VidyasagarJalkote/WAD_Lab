const express = require('express');

const app = express();


// Serve static files
app.use(express.static('public'));

app.listen(4000, () => {
  console.log(`Server has started`);
});
