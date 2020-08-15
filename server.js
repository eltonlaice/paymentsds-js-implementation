const express = require('express')

const app = express();

app.get('/', (req, res) => res.send('Hello Word'))

app.post('/pagamento', function (req, res) {
    res.send('POST request to the homepage')
});

app.listen(3000, () => console.log('Server running on port 3000!'))