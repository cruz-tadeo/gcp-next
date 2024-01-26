# Usa una imagen de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json e yarn.lock (si existe)
COPY package.json yarn.lock* tsconfig.json ./

# Instala las dependencias
RUN yarn install --production

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación
RUN yarn run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación cuando se ejecute el contenedor
CMD ["yarn", "start"]