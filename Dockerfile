# Usa l'immagine di base di Node.js
FROM node:14

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia tutto il resto del codice
COPY . .

# Espone la porta su cui l'applicazione ascolterà
EXPOSE 3000

# Definisce il comando di avvio dell'applicazione
CMD ["node", "server.js"]
