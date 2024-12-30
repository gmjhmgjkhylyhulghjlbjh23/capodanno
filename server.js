const express = require('express');
const mongoose = require('mongoose'); // Aggiungi questa riga
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://squarcio21:<fPpSZqt4Q6CAxcYE>@capodanno.xikct.mongodb.net/?retryWrites=true&w=majority&appName=capodanno', { useNewUrlParser: true, useUnifiedTopology: true });

const ticketSchema = new mongoose.Schema({
    qrCode: String,
    isValid: Boolean
});

const Ticket = mongoose.model('Ticket', ticketSchema);

app.use(express.json());

app.post('/validate', async (req, res) => {
    const { qrCode } = req.body;
    const ticket = await Ticket.findOne({ qrCode });
    if (ticket && ticket.isValid) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
