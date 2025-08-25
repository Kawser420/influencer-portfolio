//

import admin from "firebase-admin";

// Check if the environment variable exists and is valid JSON
let serviceAccount;
try {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_KEY environment variable is missing"
    );
  }

  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
} catch (error) {
  console.error("Error parsing Firebase service account:", error);
  // Fallback to using a file if environment variable fails
  try {
    // This is for development - create a serviceAccountKey.json file in your backend folder
    serviceAccount = require("../../serviceAccountKey.json");
  } catch (fileError) {
    console.error("Also failed to load service account from file:", fileError);
    throw new Error(
      "Firebase authentication failed. Please check your service account configuration."
    );
  }
}

// Initialize Firebase Admin
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log("Firebase Admin initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase Admin:", error);
}

export default admin;
