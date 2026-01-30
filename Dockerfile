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

#declare arguments
ARG NEXT_PUBLIC_DOMAIN
ARG NEXT_PUBLIC_API_DOMAIN

#set as enviornment variables
ENV NEXT_PUBLIC_DOMAIN=$NEXT_PUBLIC_DOMAIN
ENV NEXT_PUBLIC_API_DOMAIN=$NEXT_PUBLIC_API_DOMAIN

#build nextjs app
RUN npm run build


#expose port
EXPOSE 3000

#start app
CMD [ "npm" ,"run","start" ]
