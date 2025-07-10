'use client';

import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // ✅ Save user to Firestore if not exists
  const saveUserToFirestore = async (userCred: UserCredential) => {
    const uid = userCred.user.uid;
    const userRef = doc(db, 'users', uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      await setDoc(userRef, {
        uid,
        email: userCred.user.email,
        displayName: userCred.user.displayName || '',
        role: 'user', // default role
        createdAt: new Date().toISOString(),
      });
    }
  };

  const handleEmailLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await saveUserToFirestore(userCred);
      alert('Login successful!');
      window.location.href = '/dashboard';
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCred = await signInWithPopup(auth, provider);
      await saveUserToFirestore(userCred);
      alert('Google login successful!');
      window.location.href = '/dashboard';
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleEmailLogin} className="w-full bg-blue-500 text-white p-2 mb-4">
        Login with Email
      </button>
      <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-2">
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
