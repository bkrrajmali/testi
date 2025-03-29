const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
app.get('/', (req, res) => res.send('payment-service running'));
app.listen(port, () => console.log(`payment-service running on port ${port}`));
