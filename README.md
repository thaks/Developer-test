# Frontend Developer Test - STEP 2 - (Solution)

Used axios and axios.create functionality to initiate the API URL connections.
used Async/Await to fetch data for three pages and serve it from Model to Views through Controller.

Created 4 Controller for each specific functionality in the App
Search, Homepage Featured Products, Collection page Products, ProductDetail


Download ZIP -> ZIP FILE DOWNLOAD from Branch step2
Download code using the Code Zip File option , and in the project directory, you can run:

### `npm install`
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


Created and deployed to Heroku, A small (3 Endpoint) express application to serve the data for 

Homepage -> Featured Product

https://developer-test-server.herokuapp.com/api/v1/products/featured

collection page & searcpage -> Products based on route params

https://developer-test-server.herokuapp.com/api/v1/products/collection?type={collectionType}

product detail page -> Product detail based on provided id
https://developer-test-server.herokuapp.com/api/v1/product/{productId}
