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

# Saving/Updating Grades
1. Send POST request to '/api/grades'.
3. Make sure you are authenticated as described in Logging In Section
4. Make sure you set the content-type to 'application/json' as described in Logging In Section.
2. In body have the data structure as in the following example:
```
{
  "grades": [
    {
      "class": "CS 252",
      "grade": "A",
      "credits": 3
    },
    {
      "class": "CS 381",
      "grade": "A",
      "credits": 3
    }
  ]
}
```
3. This will override all previous grade information so make sure you send the entire set of grades, not just the new ones.

# Accessing Grades
1. Send GET request to '/api/grades'
2. Make sure you are authenticated as described in Logging In Section
3. Make sure you set the content-type to 'application/json' as described in Logging In Section.
4. The expected return value should look like the example below:
```
{
  "grades": [
    {
      "class": "CS 252",
      "grade": "A",
      "credits": 3
    },
    {
      "class": "CS 381",
      "grade": "A",
      "credits": 3
    }
  ]
}
```
