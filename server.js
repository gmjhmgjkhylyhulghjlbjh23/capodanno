
// Connessione a MongoDB con gestione degli errori
mongoose.connect('mongodb+srv://squarcio21:<fPpSZqt4Q6CAxcYE>@capodanno.xikct.mongodb.net/?retryWrites=true&w=majority&appName=capodanno', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connessione a MongoDB riuscita!');
}).catch((err) => {
    console.error('Errore di connessione a MongoDB:', err);
    process.exit(1); // Termina il processo se non riesce a connettersi al database
});

const ticketSchema = new mongoose.Schema({
    qrCode: String,
    isValid: Boolean
});

const Ticket = mongoose.model('Ticket', ticketSchema);

app.use(express.json());

app.post('/validate', async (req, res) => {
    try {
        const { qrCode } = req.body;
        const ticket = await Ticket.findOne({ qrCode });
        if (ticket && ticket.isValid) {
            res.json({ valid: true });
        } else {
            res.json({ valid: false });
        }
    } catch (error) {
        console.error('Errore durante la validazione del QR Code:', error);
        res.status(500).send('Errore del server');
    }
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
