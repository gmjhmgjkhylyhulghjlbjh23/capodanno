const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const validQRCodes = ['12345', 'abcde']; // Esempio di QR code validi

app.post('/verify', (req, res) => {
    const { qrCode } = req.body;
    if (validQRCodes.includes(qrCode)) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server in ascolto su http://localhost:${PORT}`));
mongoose.connect("mongodb+srv://squarcio21:<fPpSZqt4Q6CAxcYE>@capodanno.xikct.mongodb.net/?retryWrites=true&w=majority&appName=capodanno",{ useNewUrlParser: true, useUnifiedTopology: true });

