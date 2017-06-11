# DevCampWAP-WAP
Vue.js samples, Firebase samples and Web Application Project mixing all of them including pwa.

## Firebase Samples
#### 1. Firebase SDK Install
- Access to this [website](https://console.firebase.google.com/)
- Add a new project using the console.
  - choose name
  - select the region
- Add Firebase to an web app
- Copy the code and paste it in the html

#### 2. Firebase Auth (Email, SNS)
- As for account & password auth, refer to this [doc](https://firebase.google.com/docs/auth/web/password-auth)
- Go to **Authentication** and click **SET UP SIGN-IN METHOD**
- Enable **Email/Password** & **Google**
- Go to **Users** tab and **ADD USER**
- Enter the Email and Password with the user you just added to [Firebase Console](https://console.firebase.google.com/)
- Click the `Login` button to sign in with the account
- You can either sign in with Google or create an account to log in with the next two buttons.

#### 3. Firebase DB & Storage
- 


## Vue Samples (vue/samples/..)
For those who are very new to the Vue.js, these samples help you gain a better understanding of how Vue.js works in each concept.

#### 1. Components
- Understand how components work together from Parent to Child

#### 2. Props
- Understand how Parent component pass its data to Child component

#### 3. Basic Router
- Understand how Vue Router navigates to different pages using Vue Components
- [Official Library](https://github.com/vuejs/vue-router) supported

#### 4. Nested Router
- Understand how Vue Nested Router includes its Child Component to render on the same router path as Parent Component does.

#### 5. Single File Components
- Check out what is [Vue recommended development workflow]()
- type this commands in order

```text
npm install -g vue-cli
vue init webpack-simple
npm install
npm run dev
```

- With this very simple webpack config, the .vue codes get converted into essential js files.
- Hot reloding and auto-build as you make a change in codes.

# The MIT License (MIT)
Copyright © 2017 Captain Pangyo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
