# Welcome to your Octopus Expo app 👋

This app have three screens: Home(All Courses), My Courses(Bookmarked) and Community(Feed).

Frontend.
1. Home screen displays all courses, at the top of the page you can see all sourses that has been already started. And the rest of the courses, that hasn't been started yes, displays as simple Carousel behind. 
Interactive parts: by clicking on icon 'Bookmark', the course can be marked/unmarked as favorite and moved/removed to/from the bookmarked list.

2. My courses screen displays all bookmarked screens.
3. Communuty screens displays a list of simple posts from community members. Interactive part: by clciking on 'heart' icon, the post kan be liked(shows as red filled);

4. State management(client side) of all screens implemented with a ContextAPI.
5. Screens 'Home' and 'My courses' requared a CourseContextProvider.
6. Screen 'Community' requared a PostsContextProvider.

7. The app has some unit-tests implemented with jest and react-testing-library.

Backend. 
1. By running server project, the app can successfully get an object with courses.
2. All bookmarked courses stored only in Context on client side and localStorage.
3. Feed/Community data mocked with mocks/postData.ts and services/api, implemented on client side, no real requests to BE. All 'liked' post stored in Context on client side and in localStorage.


This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

3. Start the server
Go to /server project and run the server

```bash
cd server
npm run start
   ```

4. Run tests.

```bash
cd octopus
npm run test:watch
   ```