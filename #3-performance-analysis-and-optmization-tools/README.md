# DevCampWAP-PAO
Performance Analysis &amp; Optimization

## Performance Tips - Javascript Best Practices
1. go into the `perf-tips/js-best-practices`
2. make a branch `answer/yourname`
3. make a folder under js-best-practices
4. name the folder with your name. ex) `jangkeehyo`
5. create a file named `answer.js` and answer the questions
6. make a pull request to the master

## Gzip Compression - Node.js
1. go into `gzip-nodejs` folder
2. run these commands in order

```
npm install
node server.js
```

3. check out how Gzip works in the web resources

## Page Insights

## Lighthouse

## Gulp
1. Install gulp global

```
npm i -g gulp
```

2. Create a package.json

```
npm init
```

3. Create a gulpfile.js

#### Example 1 - Initial Setup & .task()
- Install node modules using the command below

```
npm install
```

#### Example 2 - .src() & .dest() & gulp-htmlmin

#### Example 3 - .watch() & eslint-google

#### Example 4 - compression sample

#### Example 5 - [Google Starter Kit](https://developers.google.com/web/tools/starter-kit/?hl=ko)

## Webpack
#### Getting-Started
1. Install webpack global

  ```js
  npm i webpack -g
  ```

2. create a package json file

  ```text
  npm init -y
  ```

3. create index.js & index.html

  ```html
  <!-- index.html -->
  <html>
    <head>
      <title>webpack 2 demo</title>
      <script src="https://unpkg.com/lodash@4.16.6"></script>
    </head>
    <body>
      <script src="app/index.js"></script>
    </body>
  </html>
  ```

  ```js
  // index.js
  function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());
  ```

4. add the contents below into the file

  ```js
  // index.js
  // import & export is ES6 that doesn't work in the browser
  // but webpack would replace them with compatible wrapper code
  + import _ from 'lodash';
  ```

  ```html
  - <script src="https://unpkg.com/lodash@4.16.6"></script>
  - <script src="app/index.js"></script>
  + <script src="dist/bundle.js"></script>
  ```

5. run this command `webpack app/index.js dist/bundle.js` and start the index.html

  ```html
  Hello webpack
  ```

6. Let's add config file for more complex configuration

  ```js
  // webpack.config.js
  // `webpack` command will pick up this config setup by default
  var path = require('path');

  module.exports = {
    entry: './app/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
  ```

#### Example 1 - CSS Code Splitting
- As for CSS files, use `css-loader`for default setting. The extra option `ExtractTextWebpackPlugin` is available for better performance

```text
npm i css-loader style-loader --save-dev
npm i extract-text-webpack-plugin --save-dev
```

1. Create a new `package.json`

```
npm init -y
```

2. Install the necessary loaders and plugins using the commands above
3. Add index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS & Libraries Code Splitting</title>
  </head>
  <body>
    <header>
      <h3>CSS Code Splitting</h3>
    </header>
    <div>
      <p>
        This text should be colored with blue after injecting CSS bundle
      </p>
    </div>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

4. Add `base.css`

```css
p {
  color : blue;
}
```

5. Add `app/index.js`

```js
import '../base.css';
```

6. Add `webpack.config.js`

```js
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
}
```

#### Example 2 - Libraries Code Splitting
- When using a couple of libraries, should you import them at the very beginning of bundling all files to avoid repetitively use them in every build.

```text
npm install --save moment
npm install --save lodash

npm i webpack-manifest-plugin --save-dev
```

1. Create a new `package.json`

```
npm init -y
```

2. Install the necessary loaders and plugins using the commands above
3. Add `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Libraries Code Splitting</title>
  </head>
  <body>
    <header>
      <h3>Libraries Code Splitting</h3>
    </header>
    <div>
      <label for="p1"><strong>Moment JS : </strong></label>
      <p class="p1">
        not yet loaded
      </p>
      <label for="p2"><strong>Lodash JS : </strong></label>
      <p class="p2">
        not yet loaded
      </p>
    </div>
    <script src="dist/vendor.js"></script>
    <script src="dist/main.js"></script>
  </body>
</html>
```

4. Add `app/index.js`

```js
var moment = require('moment');
var _ = require('lodash');
var ele = document.querySelectorAll('p');

document.addEventListener("DOMContentLoaded", function(event) {
  ele[0].innerText = moment().format();
  ele[1].innerText = _.drop([1, 2, 3], 0);
});
```

5. Add `webpack.config.js`

```js
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './app/index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

optional

```js
// 1
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor' // Specify the common bundle's name.
  }),
]

// 2
new ManifestPlugin({
  fileName: 'manifest.json',
  basePath: './dist/'
})
```

#### Example 3 - Webpack Dev Server Setting
- Initial development setting to make the build process easier

```
npm install --save-dev webpack-dev-server
webpack-dev-server --open
```

- or add this option to `package.json` to launch the dev server

```json
"scripts": { "start": "webpack-dev-server" }
```

1. Create a new `package.json` and type the commands above
2. Add `index.html`

```html
<html>
  <head>
    <title>Webpack Dev Server</title>
  </head>
  <body>
    <div class="container">
      hello
    </div>
    <script src="/dist/bundle.js"></script>
  </body>
</html>
```

3. Add `app/index.js`

```js
var ele = document.getElementsByClassName('container')[0]
ele.innerText = "Webpack loaded!!";
```

4. Add `webpack.config.js`

```js
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    publicPath: "/dist/",
    port: 9000
  },
};

```

#### Example 4 - Webpack Dev Middleware
- TBD

#### Example 5 - Webpack Plugins
-
