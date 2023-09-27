// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAhBNzHbOQPm1Hf2DslVPD9OPGK0gxLQIo',
  authDomain: 'stock-503fa.firebaseapp.com',
  projectId: 'stock-503fa',
  storageBucket: 'stock-503fa.appspot.com',
  messagingSenderId: '666949590646',
  appId: '1:666949590646:web:5d2f89e72698b3d6d68957',
  measurementId: 'G-9LER4Y63GC',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
