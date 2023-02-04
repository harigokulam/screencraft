// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZqEP9f05LL_nZ6c_NZTsjMspSUwp-4hs",
  authDomain: "screencraft-4cecb.firebaseapp.com",
  projectId: "screencraft-4cecb",
  storageBucket: "screencraft-4cecb.appspot.com",
  messagingSenderId: "843473745853",
  appId: "1:843473745853:web:33747e8e8befa70566c4d4",
  measurementId: "G-EW9LG7KKL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = getFirestore(app);


// Create a new tenant
router.post('/tenants', (req, res) => {
    const tenant = {
        CompanyName: req.body.CompanyName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        Address: req.body.Address,
        City: req.body.City,
        State: req.body.State,
        ZipCode: req.body.ZipCode,
        DateOfSignUp: req.body.DateOfSignUp,
        SubscriptionPlan: req.body.SubscriptionPlan,
        IsActive: req.body.IsActive
    };

    firebase.database().ref('tenants').push(tenant)
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json({ error: error.message }));
});

// Get all tenants
router.get('/tenants', (req, res) => {
    firebase.database().ref('tenants').once('value')
        .then(snapshot => res.json(snapshot.val()))
        .catch(error => res.status(500).json({ error: error.message }));
});

// Get a single tenant by id
router.get('/tenants/:id', (req, res) => {
    firebase.database().ref(`tenants/${req.params.id}`).once('value')
        .then(snapshot => res.json(snapshot.val()))
        .catch(error => res.status(500).json({ error: error.message }));
});

// Update a tenant by id
router.put('/tenants/:id', (req, res) => {
    const tenant = {
        CompanyName: req.body.CompanyName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        PhoneNumber: req.body.PhoneNumber,
        Address: req.body.Address,
        City: req.body.City,
        State: req.body.State,
        ZipCode: req.body.ZipCode,
        DateOfSignUp: req.body.DateOfSignUp,
        SubscriptionPlan: req.body.SubscriptionPlan,
        IsActive: req.body.IsActive
    };

    firebase.database().ref(`tenants/${req.params.id}`).update(tenant)
        .then(() => res.json({ success: true }))
        .catch(error => res.status(500).json({ error: error.message }));
});

// Delete a tenant by id
router.delete('/tenants/:id', (req, res) => {
    firebase.database().ref(`tenants/${req.params.id}`).remove()
        .then(() => res.json({ success: true }))
});
