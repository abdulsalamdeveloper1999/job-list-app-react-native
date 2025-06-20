# Job App – React Native Expo App

A simple job board mobile app built with [Expo](https://expo.dev) and React Native, inspired by Glassdoor. Users can browse, post, and view job listings, with authentication powered by Firebase.

## Features

- User authentication (sign up, login, logout) with Firebase Auth
- Add new job postings with image upload (Cloudinary integration)
- Browse all jobs, view job details
- Persistent job data using Firestore
- Modern UI with React Native Paper and Expo Router

## Project Structure

```
app/
  _layout.tsx         # App layout and navigation
  addjob.tsx          # Add job screen
  home.tsx            # Home/job list screen
  index.tsx           # Auth redirect logic
  jobDetail.tsx       # Job detail screen
  login.tsx           # Login screen
  signup.tsx          # Signup screen
assets/               # Fonts and images
config/               # Firebase, Cloudinary, image picker configs
contexts/             # React context for job selection
models/               # TypeScript models
services/             # Firestore and auth services
styles/               # StyleSheets for screens
```

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   Open in Expo Go, Android/iOS simulator, or web browser.

3. **Firebase Setup**

   - The project is preconfigured for Firebase Auth and Firestore.
   - Update `config/firebaseConfig.ts` with your own Firebase credentials if needed.

4. **Cloudinary Setup**

   - Update `config/cloudinary.ts` with your Cloudinary upload preset and cloud name.

## Scripts

- `npm start` – Start Expo development server
- `npm run lint` – Run ESLint

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Firebase Docs](https://firebase.google.com/docs/)
- [Cloudinary Docs](https://cloudinary.com/documentation)

## License

MIT

---

Made with ❤️ using Expo and
