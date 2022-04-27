import React from 'react';
import { render } from 'react-dom';
import App from './App/app.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav.js';
import AboutTeam from './AboutTeam/AboutTeam.js';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyDd1DnqW4-EGAMMAKmyWERnYDwOKJLgDhg',
//   authDomain: 'memory-lane-f1f8b.firebaseapp.com',
//   projectId: 'memory-lane-f1f8b',
//   storageBucket: 'memory-lane-f1f8b.appspot.com',
//   messagingSenderId: '82707208352',
//   appId: '1:82707208352:web:138abe3484b4c1c3c391c5',
//   measurementId: 'G-XH51JXWTVX',
// };

// initializeApp(firebaseConfig);

// const db = getFirestore();

// // collect ref
// const colRef = collection(db, 'Speech');

// getDocs(colRef)
//   .then((snapshot) => {
//     let speeches = [];
//     snapshot.docs.forEach((doc) => {
//       speeches.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(speeches);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const addSpeechForm = document.querySelector('.add');
// addSpeechForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   addDoc(colRef, {
//     Author: addSpeechForm.author.value,
//     nameOfSpeech: addSpeechForm.speech.value,
//     text: addSpeechForm.title.value,
//   }).then(() => {
//     addSpeechForm.reset();
//   });
// });

// // deleting docs
// const deleteSpeechForm = document.querySelector('.delete');
// deleteSpeechForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const docRef = doc(db, 'Speech', deleteSpeechForm.id.value);

//   deleteDoc(docRef).then(() => {
//     deleteSpeechForm.reset();
//   });
// });
render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="AboutUs" element={<AboutTeam />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
