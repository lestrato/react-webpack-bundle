# React & Webpack Package

## Initial Setup
### Install Node.js Globally (for npm packages)
* https://nodejs.org/en/

### Root directory 
* `npm install -g webpack`
* `npm install -g webpack-cli`
* `npm install`

## Available Scripts
### React root directory


#### `npm run storybook`

* All of the site's components, arranged in a library format for individual viewing/development
* Open [http://localhost:9001](http://localhost:9001) to view it in the browser.
* The page will reload if you make edits.
* New components should be added here. For more information, see the [storybook docs here](https://storybook.js.org/docs/guides/guide-react/).
   * It's easy to create a new component and add it to storybook. See [Creating a New React Component](#Creating-a-new-react-component) for instructions on how to bootstrap the **SampleComponent**.

#### `npm run serve`

* Runs the app in the development mode.
* Open [http://localhost:9000](http://localhost:9000) to view it in the browser.
* The page will reload if you make edits.

#### `npm run build:development`

* Builds the app for production to the `build` folder.
* It correctly bundles **React** in production mode and optimizes the build for the best performance.
* The build is minified and the filenames include the hashes.
* Your app is ready to be deployed!

#### `npm run build:production`

* The same as above, but with minified files.
* Better performance

## Creating a New React Component

Creating a new component in **React** is repetitive; it requires creating new files for the `index.html` and `styles.scss`, as well as the `stories.js` for **Storybook** development.

### Here are the steps to adding a new component:
1. Copy the `templates/SampleComponent` folder
2. Paste it the `src/components` folder
3. Rename the now-pasted folder and change the `SampleComponent` variable/class names inside each file to your new component's name.

## Creating a New Page (Component)

We have large **React Components** that contain all the subcomponents of a page, which will programmatically end up in the `<body />` tag of the HTML document.

Because **React** Pages are like our components, creating a new page in **React** is *also* repetitive; it requires creating new files for the `index.html` and `styles.scss`.

### Here are the steps to adding a new page:
1. Copy the `templates/SampleReactPage` folder
2. Paste it the `src/pages` folder
3. Rename the now-pasted folder and change the `SampleReactPage` variable/class names inside each file to your new page's name.
