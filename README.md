[![Build Status](https://travis-ci.com/Aaronmeade92/14-relationship-modeling)](https://travis-ci.com/Aaronmeade92/14-relationship-modeling)

  Travis: https://travis-ci.com/Aaronmeade92/14-relationship-modeling  
  PR: https://github.com/khuynh92/14-relationship-modeling/pull/1  

To run this app:

 1. clone the repo

 2. create a .env file and set PORT to your desired port.  example: `PORT = 3000` 
 3. in your terminal, type the command:  
      `npm start`  
 4. in your broswer go to  
      localhost:<YOURPORT>`  

 5. Here, you can test different RESTful routes to ensure GET requests are working for `/api/v1/predators`  
    `http://localhost::<YOURPORT>/api/v1/predators/<ID>!`   

 6. To test POST, use your choice of tools that makes requests to servers (httpie, postman). Make sure to send an object body, or a 400 error will appear. POST requests will only work on api/v1/predators.

 7. To test DELETE, use your choice of tools that makes requests to servers (httpie, postman). If no id query is passed, a 404 error will appear. DELETE requests will only work on pathnames with id parameters: `api/v1/pizza/<desired id>`.

 8. To test PUT, use your choice of tools that makes request to servers (httpie, postman). Make sure to send an object body, or a 400 error will appear. Make sure to enter a valid id in the URL, or a 404 error will appear. `api/v1/predators/<desired id>`