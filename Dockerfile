# Usar la imagen oficial de Node.js v20
FROM node:20

# Crear el directorio de la aplicación
WORKDIR /usr/src/app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/index.js"]