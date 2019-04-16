# Create Account
1. Send POST request to '/api/create'.
2. Ensure that the content type header is set to 'application/json'
3. In the body have json which includes fields for username, password, firstname, and lastname
4. Will return a 201 if user was added succesfully, else will return a 401.
5. 401 will occur if username is already taken

# Login
1. Send POST request to '/api/login'
2. Ensure that the content type header is set to 'application/json'
3. In the body have json which includes fields for username and password
4. If login was succesful then a 200 response will be sent and the body 
will have json that contains the JWT/token the firstname of the user
and the lastname of the user.
5. Set the JWT/token in the "authorization: Bearer <token>" header for all future
requests that are not create account or login
6. If login failed either a 400 or a 401 status will be sent back. A 400 status means
1 of the login fields was missing from the json. A 401 status code means that the username/password comobo was wrong.

