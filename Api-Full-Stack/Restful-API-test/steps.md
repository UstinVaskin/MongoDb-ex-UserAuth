Very beging 
install 
npm i mongoose-unique-validator
npm i bcrypt
npm i jsonwebtoken 

Steps for tonight's homework:
'Don't fo'get to install bcrypt & jsonwebtoken
'1. Create the user model
- Build out the basic model
- Set up the virtual field for passwordConfirmation (watch the spelling)
2. Set up the user methods
- .pre('validate') to check for match between password and passwordConfirmation
- .pre('save') to hash password using bcrypt before saving to db
- Export User model
3. Make user controllers
- Make the register function
- Hook up the route for register and TEST!
- If you are getting 'module' missing errors it's likely that there's an issue with your importing and exporting
- Make the login function
4. Validation
- Add secret to `config/environment.js` and require it
- Remember to make `validatePassword()` in the user model
- Hook up the route for login and TEST!
5. Routing and secureRoute
- Migrate your routes to a router.js file, and test that they work as expected
- Make a secureRoute folder in lib
- Make a `secureRoute()` function
- Check to see if a token exists
- Check if token is valid
6. Import secure route to routes and add it to any routes that should be secure. Leave this as the last step so that testing can be easier



