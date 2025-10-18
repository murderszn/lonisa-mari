import { getFunctions, httpsCallable } from 'firebase/functions';
import { initializeApp } from 'firebase/app';

// Firebase configuration for lonisa-mari project
const firebaseConfig = {
  apiKey: "AIzaSyArt8xU4EFhaV45oJ271J5bN7-ba5qWpCs",
  authDomain: "lonisa-mari.firebaseapp.com",
  projectId: "lonisa-mari",
  storageBucket: "lonisa-mari.firebasestorage.app",
  messagingSenderId: "161464897239",
  appId: "1:161464897239:web:37d334f32f6d6017656a92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Functions
const functions = getFunctions(app);

export const subscribeToNewsletter = async (email, source = 'website') => {
  try {
    const addSubscriber = httpsCallable(functions, 'addSubscriber');

    const result = await addSubscriber({
      email: email,
      source: source
    });

    return result.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};

// Alternative approach using fetch for HTTP functions (if you prefer HTTP endpoints)
export const subscribeViaHTTP = async (email, source = 'website') => {
  try {
    const response = await fetch('https://us-central1-lonisa-mari.cloudfunctions.net/subscribeToNewsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        source: source
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Subscription failed');
    }

    return data;
  } catch (error) {
    console.error('Error subscribing via HTTP:', error);
    throw error;
  }
};
