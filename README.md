# THE TECH DIRECTORY

### [Website](https://www.thetech.directory/)

![The Tech Directory Home Page](/screenshots/home.png?raw=true "Home Page")



This is the official repository for The tech directory, a platform that showcases the profiles of creatives (Developers, Designers and Product Managers) in our ecosystem.

# Getting Started
This process is for somewhat tech savvy individuals, in order to add your profile to the platform you'll need to:

-  Fork this repo
-  Create a branch e.g `<your-name>-profile`
-  In the `/src/data/users/` folder, create a `json` file with your preferred username as the file name e.g. `samuel.json
-  Copy the contents of `/docs/template.json` and paste in your newly created file
-  Fill the contents accordingly
-  Commit your changes
-  Push it to your fork of this repo (from the first step)
-  Create a PR to the `develop` branch on this repo


# CONTRIBUTING

If you need a feature and you don't have the time or knowledge to work on it, please submit an issue on the repo and we will try to get to it. If you can contribute, follow the steps below to get the project up and running

## Installing
To get the project running, follow these steps:
- Create a folder
- Enter/Navigate into that folder
```
cd <folder-name>
```

- Clone this repository:
```
git clone https://github.com/samie820/dev-directory.git .
```

- Install all the project's dependencies:
```
yarn
```
- Once that's done, run the project:
```
yarn develop
```
- To build, run
```
yarn build
```

# Deployment
The app is currently deployed on Netlify and can be seen [here](https://www.thetech.directory/)

Whenever a PR is sent, Netlify triggers a build and generates a preview for you:

![Netlify Preview](/screenshots/netlify-preview.png?raw=true "Preview Page")


# Built With
- Javascript
- Vue/Gridsome


# Authors
- Samuel Omole [@samie820](https://github.com/samie820) 
- Nelson Nelson-Atuonwu [Nelson](https://github.com/Kunoacc)
