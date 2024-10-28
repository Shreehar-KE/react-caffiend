## A React web app for tracking daily coffee consumption with Firebase authentication and Firestore real-time database.

### Tech Stack

- JavaScript
- React
- Firebase

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shreehar-KE/react-firebase-coffee-tracker.git

   cd react-firebase-coffee-tracker
   ```
2. **Add your Firebase credentials to .env file**
   ```
   VITE_FIREBASE_APIKEY=
   VITE_FIREBASE_AUTHDOMAIN=
   VITE_FIREBASE_PROJECTID=
   VITE_FIREBASE_STORAGEBUCKET=
   VITE_FIREBASE_MESSAGINGSENDERID=
   VITE_FIREBASE_APPID=
   ```
3. **Install Dependencies**
   ```
   npm install
   ```
4. **Run Server**
   ```
   npm start
   ```
5. **Open your browser and navigate to** ``http://localhost:5173/``


### Learning Outcomes
- Integrated **Firebase SDK** for authentication and real-time database management with **Firestore**.
- Developed **custom hooks** using `useContext` and `createContext` to manage a global context for the app.
- Used **LocalStorage to temporarily store user data** to reduce frequent fetch calls to Firebase and improve app performance.
