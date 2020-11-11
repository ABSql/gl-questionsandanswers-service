# Thr3ds QA Service

>Thr3ds is an e-commerce clothing retailer. For this project I inhereted legacy front-end code in react and was tasked with building out and prototyping an optimized back-end that could handle high throughput web traffic.  I worked with two other teammates, each of us focusing on a different microservice.

## Acheivements and Optimizations

- Seeded a MongoDB database with 10 million primary records amounting to 18 GB of raw data
- Optimized MongoDB query times by over 90% with indexing
- Reached a throughput of 2000 requests per second with an average response time of 50ms
- Implimented horizontal scaling and caching using an NGINX load balancer

## Screenshot of Legacy Frontend
![Imgur](https://i.imgur.com/hOjwdS8.png?1)

## Screenshot of Load Test
![Screenshot](https://imgur.com/hOjwdS8)

## Usage

1. clone this repo
2. run npm i in the root directory
3. run the npm seed command
4. install and setup mongodb
4. import the products.json file to your mongo database using mongoimport
5. run npm start and use the frontend to navigate the dummy data

## Technologies Uses

- MongoDB
- mongoose
- NGINX
- AWS
- Artillery
- Webpack
- Babel
- Express
- Node.js

## License
[MIT](https://choosealicense.com/licenses/mit/)
