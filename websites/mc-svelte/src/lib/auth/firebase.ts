import { goto } from '$app/navigation';
import { varEnv } from '$src/env';
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { signOut, type Auth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { clear_storage } from '$lib/utils';
import { browser } from '$app/environment';

const config = {
  apiKey: varEnv.apiKey,
  authDomain: varEnv.authDomain,
  projectId: varEnv.projectId,
  storageBucket: varEnv.storageBucket,
  messagingSenderId: varEnv.messagingSenderId,
  appId: varEnv.appId,
  measurementId: varEnv.measurementId
};

export function getApp(): FirebaseApp | null {
  if (config.appId && config.apiKey) {
    return initializeApp(config);
  }
  return null;
}

export function getFirebaseAuth(): Auth | null {
  const app = getApp();
  if (app) {
    return getAuth(app);
  }
  return null;
}

export async function logout() {
  if (browser) {
    const userService = (await import('../services/user.service')).userService;
    userService.update((value) => {
      value.clear();
      return value;
    });
  }

  const auth = getFirebaseAuth();
  if (auth) {
    await signOut(auth);
  }
  clear_storage();
  await goto('/login');
}
