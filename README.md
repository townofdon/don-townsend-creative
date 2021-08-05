# Don Townsend Creative

## Source Code

If you landed here from my portfolio website, it's likely that you're here
to inspect my code quality! Please take a look around and see what you think.

### Code Quality

I have a committment to code that satisfies these principles:

- Highly Modular
- Highly Maintainable
- Efficient, Elegant and Effective

My goal is to make my code easier for anyone (including myself in the future)
to be able to tweak and apply patches to code.

### UX

I have a strong committment to User Experience (UX). I believe that
websites and apps should be highly intuitive and not require a lot of
🤔.

### Known Issues

This is a demo. There were some known issues that, for the sake of brevity and getting my portfolio live, I let live to be squashed another day:

- Items not repositioned properly on screen resize
  - Re-calculating DOM elements proved to be much more of a :bear: of a task than I realized.
  - 95% of users never re-size their screen or open dev-tools anyways
  - So I just removed the onResize event handler
- The Video was giving me all sorts of trouble to get the sizing exactly right, so I just slapped a max-height or max-width depending on the media query.
- The main text after the splash screen jerks around if the user scrolls too fast. I suppose I could disable scrolling temporarily but when I user-tested this site with my friends, they _all_ scrolled slowly. Usually it's just me scrolling fast while working on the site (trying to get to the nesxt section).

### Deployment

First, SSH to into your Digital Ocean server. Git pull any changes that need to be pulled in.

```
# start docker in detached mode
docker-compose up -d
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
