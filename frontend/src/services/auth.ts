import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  getIdToken,
} from 'firebase/auth';
import { auth } from '../firebase';
import { api } from './api';

export const authService = {
  async login(email: string, password: string) {
    // Firebase authentication
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await getIdToken(userCredential.user);

    // Store token
    localStorage.setItem('token', token);

    // Sync with backend
    await api.post('/auth/login', { idToken: token });

    return userCredential.user;
  },

  async signup(email: string, password: string, name: string) {
    // Firebase authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update profile with display name
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
    }

    const token = await getIdToken(userCredential.user);

    // Store token
    localStorage.setItem('token', token);

    // Create user in backend
    await api.post('/auth/register', {
      uid: userCredential.user.uid,
      email,
      name,
    });

    return userCredential.user;
  },

  async logout() {
    await signOut(auth);
    localStorage.removeItem('token');
  },

  async getCurrentUser() {
    if (auth.currentUser) {
      await getIdToken(auth.currentUser, true);
    }
    return auth.currentUser;
  },
};
