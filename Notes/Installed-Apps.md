

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


1. Python (via [Google Cloud](https://cloud.google.com/python/docs/setup#linux))
  1. Install python
  ```sh
  sudo apt update
  sudo apt install python3 python3-dev python3-venv
  ```
  1. Install pip (package installer for python )
  ```sh
  wget https://bootstrap.pypa.io/get-pip.py
  sudo python3 get-pip.py
  ```
  *WARNING: Running pip as root will break packages and permissions. You should install packages reliably by using venv: https://pip.pypa.io/warnings/venv*
  1. venv : venv is a tool that creates isolated Python environments. These isolated environments can have separate versions of Python packages, which allows you to isolate one project's dependencies from the dependencies of other projects. We recommend that you always use a per-project virtual environment when developing locally with Python.
  ```sh
  pip install virtualenv
  cd your-project
  python3 -m venv env
  source env/bin/active
  ```

  1. Install [numpy](https://numpy.org/install/) - [NumPy Documentation](https://numpy.org/doc/stable/)
  ```sh
  pip install numpy
  ```

  1. Install matplotlib
  ```sh
  pip install matplotlib
  ```

  1. Install python toolkit for gui display [ref](https://stackoverflow.com/questions/56656777/userwarning-matplotlib-is-currently-using-agg-which-is-a-non-gui-backend-so)- this fixes the following warning: *UserWarning: Matplotlib is currently using agg, which is a non-GUI backend*
  ```sh
  sudo apt-get install python3-tk
  ```

# Jan 2022
Github Pages - to have public website
Work with Jekyll.  Therefore install [Jekyll](https://jekyllrb.com/docs/installation/ubuntu/).

``` sh
# install ruby
sudo apt-get install ruby-full build-essential zlib1g-dev

# create ruby gem directory
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# install Jekyll
# I did not install via bundler ( https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)
gem install jekyll bundler
```
