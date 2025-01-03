

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kalpna-aaa32.firebaseapp.com",
  projectId: "kalpna-aaa32",
  storageBucket: "kalpna-aaa32.firebasestorage.app",
  messagingSenderId: "562100737347",
  appId: "1:562100737347:web:490b163c66ead3d095cbf6"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);


//  import cloudinary from "cloudinary";


//  // cloudinary connection yaha hai 
//  cloudinary.v2.config({
//      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//      api_key: process.env.CLOUDINARY_API_KEY,
//      api_secret: process.env.CLOUDINARY_API_SECRET,
//    });




// Cloudinary Configuration

// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
//   api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
//   api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
// });

// export const app = cloudinary;

// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';

// dotenv.config();

// cloudinary.config({
//   cloud_name:import.meta.env.CLOUDINARY_CLOUD_NAME,
//   api_key: import.meta.env.CLOUDINARY_API_KEY,
//   api_secret: import.meta.env.CLOUDINARY_API_SECRET,
// });

// // export default cloudinary;
// export const app = cloudinary;
