# Installation
Install dependency
```sh
$ npm install
```

# Start application
```sh
$ npm start
```

### Overview of design decisions
I use express generator to generate a project.

### What language I picked and why
I use Javascript because I am more experience with it. The server side language is Nodejs with the framework expressjs.

### Process for verifying the correctness of program
I check the requirements and implement it as best as I can. Console log to make sure files are source correctly and functions are working properly.

### What didn't I get to do, or what else I might of do more with time?
- Make the UI better
    - better dialog than the alert
    - material design
- Grunt/gulp/webpack for build processor
    - minify css/javascript
    - Unit test if necessary
- Add more message template so user can select or allow user to create template and store in a database to be re-use.
- Actually send the text with Twilio ( a SMS service )
- Use a javascript framework ( Angular )
- use database (Mongodb or postgresql) to store the json data
- Allow user to save message draft and to send it later
- Allow user to add more Company or Guest
- Add a login screen ( authentication or basic auth)
