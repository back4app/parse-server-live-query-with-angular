![Parse Server logo](https://github.com/parse-community/parse-server/raw/master/.github/parse-server-logo.png)

Parse Server is an [open source version of the Parse backend](http://blog.parseplatform.org/announcements/introducing-parse-server-and-the-database-migration-tool/) that can be deployed to any infrastructure that can run Node.js.

Parse Server works with the Express web application framework. It can be added to existing web applications, or run by itself.

# The reason for this repo

Here are what I needed of Parse Server that I could not find info easily on the internet:
- Using Parse Server latest version (currently v3.0.0)
- Using Parse Server Live Query with latest Javascript SDK (currently v2.0.2)
- Using Angular latest version (currently v6.1.0)
- Using Docker Compose to start these containers:
    - MongoDB
    - Parse Server
    - Parse Dashboard
- The docker-compose.yml file must configure Parse Server Live Query ClassNames and Parse Dashboard configuration
- These containers must work on Docker for Windows using LCOW (Linux Container on Windows)
    - The reason for this is because Docker Linux Containers on Windows have a hard time to set the volume for MongoDB data (I have tried and tried and cannot make it work)

This repo will show you the basics to Parse Server Objects (CRUD: create-read-update-delete) and Parse Server Live Query (how to easily maintain live update on a query or object).

# Prerequisite

- Windows 10 with latest updates (currently v1803)
    - Must have administrator rights on Windows and be able to run Powershell in elevated mode (administrator mode)
- Docker for Windows with LCOW support ([v18.02 and up](https://store.docker.com/editions/community/docker-ce-desktop-windows))
    - Make sure you are running Docker Windows Container (not linux)
- Once Docker for Windows is installed, enable Experimental features under Settings > Deamon
- Code editor like [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/)

# Getting Started

1. Clone this repo.
2. Open Powershell in elevated mode, and cd to the repo folder.
3. Run docker-compose up command (-d for detach):
```powershell
docker-compose up -d
```
4. Congratulation, you now have a MongoDB and Parse Server running on your machine.

5. Open the repo in your code editor.
6. Run npm install to download modules:
```powershell
npm install
```
7. Run ng serve -o to open the Angular demo:
```powershell
ng serve -o
```

# Demo

Parse Server URL: http://localhost:1337/parse

Parse Dashboard URL: http://localhost:4040/
- username: admin
- password: admin

Angular Demo URL: http://localhost:4200/
- To see the Parse Server Live Query in action:
    - Open two (or more) separate browser and put them beside each other
    - Each browser, navigate to http://localhost:4200/
    - In any browser, add or delete a Todo
    - Watch how each page update itself automatically

# Other

## docker-compose.yml

You can look at file docker-compose.yml and change any configuration you want for MongoDB, Parse Server or Parse Dashboard.

# Help

For information, this repo uses [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

Feel free to contact me for support.