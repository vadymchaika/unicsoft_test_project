FROM node:20-bookworm

RUN npx -y playwright@1.44.0 install --with-deps

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "test"]