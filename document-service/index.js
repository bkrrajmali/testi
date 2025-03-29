const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
app.get('/', (req, res) => res.send('document-service running'));
app.listen(port, () => console.log(`document-service running on port ${port}`));
