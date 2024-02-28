const React = require('react');
const ReactDOMServer = require('react-dom/server');
const express = require('express');
const app = express();

// Your React component
const MyComponent = require('../src/App.js');

app.get('/', (req, res) => {
  const componentHTML = ReactDOMServer.renderToString(React.createElement(MyComponent));

  res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>My Page</title></head>
    <body>
      <div id="root">${componentHTML}</div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
