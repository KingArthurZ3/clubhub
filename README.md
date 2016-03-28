# ClubHub

### Overview

ClubHub is written with React and ES6 and uses Node to both transpile code into browser-supported Javascript and also to serve the static files. Styling is written in SCSS to be concise.

### Directory Structure

`bundles/` Contains the entry-point Javascript file

`components/` Contains all React components

`scss/` Contains style files

`static/` Contains static resources, for example HTML and images

### Setting Up (Mac OS X)

1. Install Brew http://brew.sh/
2. In Terminal run `brew install npm node`
3. `brew install git`
4. Clone the repository.
5. `cd clubhub`
6. `npm install`

### Developing (Mac OS X)

1. Start the React/ES6 transpilers and the SCSS compiler with `npm run watch`
2. Run the server with `npm run server`

### Deploying (Mac OS X)

1. Build the JavaScript and CSS with `npm run build`
2. Output will be in `static/js` and `static/css` respectively.
