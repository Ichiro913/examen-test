# Image de base imposée : Node 18
FROM node:18-alpine

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
RUN npm install

# Copie de tout ton code actuel
COPY . .

# Port exposé (généralement 3000 pour Node)
EXPOSE 3000

# Lancement de ton projet
CMD ["npm", "start"]
