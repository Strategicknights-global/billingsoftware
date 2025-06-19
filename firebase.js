import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBindbSAKLOhbNS3UOgngMqiEURVQcJyQ",
  authDomain: "billing-software-b9c06.firebaseapp.com",
  databaseURL: "https://billing-software-b9c06-default-rtdb.firebaseio.com", // ✅ Required
  projectId: "billing-software-b9c06",
  storageBucket: "billing-software-b9c06.appspot.com", // ✅ Corrected
  messagingSenderId: "164717243704",
  appId: "1:164717243704:web:47b6988901db3259e825cd",
  measurementId: "G-PPNSBL7LJY"
};

const app = initializeApp(firebaseConfig);

function write_data(email, passwordd) {
  const db = getDatabase(app); // ✅ Pass `app` here
  const reference = ref(db, 'User-details/user-1');

  set(reference, {
    Email: email,
    Password: passwordd
  });
}

write_data("testing1@gmail.com", "hekcuiajkerjc");