<div align="center">
  <h1>React Native Test App</h1>

  <a href="https://api.nasa.gov/">
    <img
      width="80"
      alt="NASA Logo"
      src="https://github.com/facundo-cachan/nasa_test/blob/master/src/assets/images/logo.png"
    />
  </a>

  <p>Custom on React Native application to consume NASA image api.</p>
</div>

<hr />

#### Using React Native, build an app that:

- [x] Connects to the[NASA API](https://api.nasa.gov/){:target="_blank"}
- [x] Obtains photos from the 'Mars Rover' endpoint
- [x] Allows the user to see the photos of each rover (Curiosity, Opportunity and Spirit)
- [x] The photos list should be paginated showing a max of 25 photos per page (dynamic loading similar to facebook/instagram will be nice, not required)
- [x] Allows the user to filter the rover photos by camera
- [x] default it shows the latest photos for current day
- [x] Allows the user to search for photos based on 'Earth Day' date (2020-09-2
- [ ] Allows the user to search for photos based on the 'Sol' date (289)

`Optional:`

- [x] Allow the user to save search parameters in Local Storage
- [x] A lot of extra points if you include a few tests.
- [x] We don't care about the UX design, but a nicely styled app would get extra points :D

Notes:

- [x] You can use ~~Expo~~ or CLI
- [x] You can use Redux but we prefer Context
- [x] We will check for coding style and consistency mostly, we are interested in seeing how you think and organize a project.
- [x] Please use a linter!
- [x] When you finish the test, push it as a public repository in github ~~, gitlab, bitbucket or similar~~ and send us the repository URL.

## Usage
**_To avoid restricting the number of inquiries, carry them out locally._**

 - Start local server
```
  yarn server
```
 - Run project
```
  yarn ios
```

## Previews Snapshots
<div style="flex-direction: row">
  <img src="/src/assets/images/Welcome.png" width="200">
  <img src="/src/assets/images/Rovers.png" width="200">
  <img src="/src/assets/images/Cameras.png" width="200">
</div>