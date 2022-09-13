# Bug with @react-pdf v3 and meteor

To get started, run the following:

```sh
meteor npm install
meteor npm start
```

Go to `localhost:3000` and see the bug in the console.

* Downgrading `@react-pdf/renderer` to v2.1.1 solved the issue, whereas on v2.1.2 and upwards the bug is triggered.
* React version 17 or 18 does not seem to have an effect
* Meteor version does not seem to have an effect either
