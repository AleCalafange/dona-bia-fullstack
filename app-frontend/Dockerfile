FROM node:20 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

FROM nginx:alpine

# Copia os arquivos do Angular
COPY --from=build /app/dist/app-frontend/browser /usr/share/nginx/html

# Copia a configuração personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
