# Installation
Installing dependency. Require Node.js
```sh
$ npm install
```

# Start application
```sh
$ npm start
```

Open application on localhost:3000

### Overview of design decisions
I used the application generator tool, express-generator, to quickly create an application skeleton. I used a form with drop down menu and a text area so that users/staff can select a hotel and a guess from the databases. After selecting both option a message template will be generated with the selected option in the text area. Depending on the time-zone the greeting will be either good morning, good afternoon, or good evening. When the user have selected the required fields the message can be sent to the client with a click of a button. I designed the application this way for its fast and user friendly layout for staff members to use.

### What language I picked and why
I used JavaScript because I wanted to build single-page application. The server side language is Nodejs with the framework expressjs. These languages were used due to my experience implementing them.

### Process for verifying the correctness of program
I read the requirements carefully and followed them as best I can. I used console log to make sure files were sourced correctly and functions were working properly. I used debugger to help solve road blocks that I had.

### What didn't I get to do, or what else I might of do more with time?
- Enchance UI
    - better dialog than the standard alert
    - add material design
- Grunt/gulp/webpack for build processor
    - minify CSS/JavaScript
    - Unit test if necessary
- Add more message template so users can select or allow them to create new message and store in a database to be re-use.
- Actually send the message with Twilio ( a SMS service )
- Use a JavaScript framework ( Angular )
- Use database (MongoDB or PostgreSQL) to store the JSON data
- Allow user to save message draft and to send it later
- Allow user to add more Company or Guest on the page
- Add a login screen ( authentication or basic auth)
