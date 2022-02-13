# Result-management

##  Steps to run the code (Windows OS)

You'll need to have node.js installed in the machine. Git Bash is suggested as a terminal

- Create folder 'Any-named-folder'
```sh
mkdir Any-named-folder
```

- Navigate to folder 'Any-named-folder'
```sh
cd Any-named-folder
```

- Clone the github repository in your machine by following command in terminal"
```sh
git clone https://github.com/Urcodebudy/result-management
```

- After clonning the repository, Navigate to the project folder by running following command in terminal:
```sh
cd result-management/
```

- Run the following command to install the node.js packages
```sh
npm install
```

- Run the server by running following command:
```sh
node run start
```

- The ouput in the termnal will be :
>Server started on localhost:3000 in DEVELOPMENT mode.
>Connected to DB with host:localhost

##Note: After reading the code you can see there is a testing route on localhost:3000/api/v1/test/ in result-management/back-end/routes/student you can check it by typing the url in url tab:
- Now open browser and type following url in URL tab
```sh
localhost:3000/api/v1/test/
```

## Installation

Web App requires [Node.js](https://nodejs.org/) to run.
[Git Bash](https://git-scm.com/) is suggested as a terminal.

Install the dependencies and devDependencies and start the server.

```sh
cd <foler path>
npm install
npm run start
```
#NOTE: CRUD opearations are improved but not included in the code as CRUD is the part of Controller logic. So CRUD will be added when we'll be dealing with controller logics.
