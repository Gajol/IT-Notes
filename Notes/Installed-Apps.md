

# Ubuntu
install guest additions


# Software Version Management
1. Git
: install git

# Programming Languages
1. React, NodeJS, JavaScript
```sh
install nodejs
install react
install ...
```

1. Python (TBD)

# Text editor

1. Sublime
: Sublime requires license/paying (Is there a better aternative?  Yes, switching to Atom).

  1. Babel Syntax Highlighting
  Use Babel Language Definition for Editor (Sublime, Atom, VS Code, ...)
    - [JSX Intro](https://reactjs.org/docs/introducing-jsx.html)
    - [BabelJS Editors Configuration](https://babeljs.io/docs/en/editors)
    - [Add package control](https://packagecontrol.io/)


1. Sublime vs Atom
Starting using Atom and prefer it much better.  Installed Atom (2021-05-21)
Configured Atom for Githum (see Atom-Notes.md)

# File Sharing
Dropbox
: [Dropbox Install](https://www.dropbox.com/install-linux).  Have Dropbox on home directory (`/home/doug/Dropbox`).  There is a python-script for command line control of Dropbox, but it has not been install.  See ([Dropbox Install](https://www.dropbox.com/install-linux)).  To run dropbox use `~/.dropbox-dist/dropboxd`.



# Process Monitoring
htop

```sh
sudo snap install htop
```

1. MERN Stack
[Tutorial MERN LogRocket](https://blog.logrocket.com/mern-stack-tutorial/)
Project Idea - list of languages and attributes, turn to views, .. and get json, convert to markdown....
  1. npm init // creats project in folder (in my case ../webcode/MERN/)

  1. npm i express mongoose body-parser bcryptjs validation  // adds dependencies

  1. [nodemon](https://nodemon.io/)  *npm i -D nodemon* // I did it from the ../MERN directory, not sure if this is necessary...
  ```sh
  ps aux | grep node
  // find processes running on node - to kill express
  ```
  trying to run *npm run app* fails, [Debog NPM Run Scrips](https://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html) - Issue: I was using *node...* whereas I should be using *npm...*

  1. [Mongo DB MERN Stack](https://www.mongodb.com/mern-stack) : Using MongoAtlas.  Connected with Google Account. VoX

  '''sh
  https://www.mongodb.com/cloud/atlas
  Create Project Name : MERN-LogRocket
  Create Cluster Name: MERNCluster
  username: dougn
  password: NHL2day
  connection string: mongodb+srv://dougn:<password>@merncluster.zlhnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  ```

  1. Install Postman [Postman](https://www.postman.com/)  - Probably should install OpenAPI instead.  *sudo install postman*  [postman account uses Google account]  https://web.postman.co/home

  1. install yarn to start react app *sudo install yarn*
  1. npm install cors  (on backend server)
  1. axios (http client) - npm install --save react-axios


1. Network tools
So ifconfig if
sudo apt install net-tools


1. MongoDB Learning
  1. Mongodb *sudo apt install mongod*  
  1. see ../Data/MongoDB.md
