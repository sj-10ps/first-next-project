#base image(node installed)
FROM node:22-alpine

#set working directory
WORKDIR /app

#copy package files
COPY package*.json ./

#install dependencies
RUN npm install

#copy rest project
COPY . .

#build nextjs app
RUN npm run build


#expose port
EXPOSE 3000

#start app
CMD [ "npm" ,"run","start" ]
