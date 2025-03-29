const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
app.get('/', (req, res) => res.send('customer-ui running'));
app.listen(port, () => console.log(`customer-ui running on port ${port}`));
